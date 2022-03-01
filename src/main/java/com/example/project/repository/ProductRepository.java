package com.example.project.repository;

import com.example.project.entity.Product;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.ArrayList;
import java.util.List;

public interface ProductRepository extends CrudRepository<Product, Long> {
    @Override
    ArrayList<Product> findAll();
    String productInform = "SELECT p.product_Idx, p.product_Image, p.product_Name, p.discount_Rate, " +
            "(p.product_Price-(p.product_Price * (p.discount_Rate/100))) AS discount_Price, p.product_Price";
    String productDetail = "SELECT p.product_Image, p.product_Name, (p.product_Price-(p.product_Price/p.discount_Rate)) AS discount_Price" +
            "p.discount_Rate, p.product_Price, p.product_unit, product_volume, p.product_delivery, p.product_detail";

    @Query(value = "SELECT p FROM Product p where p.productIdx = :Id", nativeQuery = false)
    Product findProducts(@Param("Id") Long productIdx);

    //이 상품 어때요?
    @Query(value = "SELECT p.product_Idx, p.product_Image, p.product_Name, p.discount_Rate," +
            "(p.product_Price-(p.product_Price * (p.discount_Rate/100))) AS discount_Price , p.product_Price FROM Product p ORDER BY RAND() LIMIT 3", nativeQuery = true)
    ArrayList<Product> findRamdomProduct();

    //놓치면 후회할 가격!
    @Query(value = productInform + " FROM Product p", nativeQuery = true)
    ArrayList<Product> findDiscountProduct();

    //후기 3000개 돌파 상품
    @Query(value = "SELECT p.product_Idx, p.product_Image, p.product_Name, p.discount_Rate,\n" +
            "       (p.product_Price-(p.product_Price/p.discount_Rate)) AS discount_Price, p.product_Price\n" +
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
