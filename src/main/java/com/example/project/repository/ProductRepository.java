package com.example.project.repository;

import com.example.project.entity.Product;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.ArrayList;

public interface ProductRepository extends CrudRepository<Product, Long> {
    @Override
    ArrayList<Product> findAll();
    //특정 상품 조회
    @Query(value = "SELECT p FROM Product p where p.productIdx = :Id")
    Product findProducts(@Param("Id") Long productIdx);

    //이 상품 어때요?
    @Query(value = "SELECT * FROM Product p ORDER BY RAND() LIMIT 8", nativeQuery = true)
    ArrayList<Product> findRamdomProduct();

    //놓치면 후회할 가격!
    @Query(value = "SELECT * FROM Product p ORDER BY p.discount_rate DESC LIMIT 8", nativeQuery = true)
    ArrayList<Product> findDiscountProduct();

    //후기 3000개 돌파 상품
    @Query(value = "SELECT *" +
            "    FROM Product p\n" +
            "\n" +
            "        LEFT JOIN ( SELECT product_id, count(product_id) AS 'reviewCount'\n" +
            "                    from Review\n" +
            "                    GROUP BY product_id) AS r\n" +
            "                    on r.product_id = p.product_idx\n" +
            "\n" +
            "    HAVING reviewCount > 2;", nativeQuery = true)
    ArrayList<Product> reviewProduct();

}
