package com.example.project.jwt;

import com.example.project.entity.User;
import com.example.project.service.ExpiredRefreshTokenService;
import com.example.project.service.UserService;
import io.jsonwebtoken.*;
import lombok.RequiredArgsConstructor;
import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.stereotype.Component;
import org.springframework.web.util.WebUtils;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.List;

@RequiredArgsConstructor
@Component
public class JwtTokenProvider {
    private final long ACCESS_TOKEN_VALID_TIME = 30 * 60 * 1000L; //30분
    private final long REFRESH_TOKEN_VALID_TIME = 60 * 60 * 24 * 7 * 1000L; //1주
    private String secretKey = "secret";

    private UserService userservice;
    private final ExpiredRefreshTokenService expiredRefreshTokenService;
    //JWT ACCESS 토큰 생성
    public String createAccessToken(String userId, List<String> roles) {
        Claims claims = Jwts.claims().setSubject(userId);
        claims.put("roles", roles);
        Date now = new Date();
        return Jwts.builder()
                .setHeaderParam(Header.TYPE, Header.JWT_TYPE)
                .setIssuer("fresh")
                .setClaims(claims)
                .setIssuedAt(now)
                .setExpiration(new Date(now.getTime() + ACCESS_TOKEN_VALID_TIME))
                .claim("id", "아이디")
                .claim("email", "이메일")
                .signWith(SignatureAlgorithm.HS256, secretKey)
                .compact();
    }

    //JWT REFRESH토큰 생성
    public String createRefreshToken(String userId, List<String> roles) {
        Claims claims = Jwts.claims();
        claims.put("roles", roles);
        Date now = new Date();
        return Jwts.builder()
                .setHeaderParam(Header.TYPE, Header.JWT_TYPE)
                .setIssuer("fresh")
                .setClaims(claims)
                .setIssuedAt(now)
                .setExpiration(new Date(now.getTime() + REFRESH_TOKEN_VALID_TIME))
                .claim("id", "아이디")
                .claim("email", "이메일")
                .signWith(SignatureAlgorithm.HS256, secretKey)
                .compact();
    }

    public Authentication getAuthentication(String token) {
        String email = getUserId(token);
        User user = userservice.getUser(email);
        UsernamePasswordAuthenticationToken token1 = new UsernamePasswordAuthenticationToken(user,"",user.getAuthorities());
        return token1;
    }
    //토큰에서 회원 정보 추출
    public String getUserId(String token) {
        return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody().getSubject();
    }

    public String resolveAccessToken(HttpServletRequest request) {
        String token = request.getHeader("access-token");
        return token;
    }
    //Request의 Header에서 token값을 가져옵니다. "X-AUTH-TOKEN" : "TOKEN값"
    public String resolveRefreshToken(HttpServletRequest request) {
        String token = null;
        Cookie cookie = WebUtils.getCookie(request, "X-AUTH-TOKEN");
        if (cookie != null) token = cookie.getValue();
        return token;
    }

    //토큰의 유효성 + 만료일자 확인
    public boolean validateToken(String jwtToken) {
        try {
            Jws<Claims> claims = Jwts.parser().setSigningKey(secretKey).parseClaimsJws(jwtToken);
            return !claims.getBody().getExpiration().before(new Date());
        } catch (Exception e) {
            return false;
        }
    }
    public boolean validateRefreshToken(String jwtToken) {
        if(expiredRefreshTokenService.isExpiredToken(jwtToken)) {
            return false;
        }
        return validateToken(jwtToken);
    }
}
