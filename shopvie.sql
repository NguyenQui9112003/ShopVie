-- ----------------------------
-- Table structure for Products
-- ----------------------------
DROP TABLE IF EXISTS "Products";
CREATE TABLE "Products"(
  "img" varchar(255) NOT NULL,
  "name" varchar(255) NOT NULL,
  "content" varchar(255) UNIQUE NOT NULL,
  "price" varchar(255) NOT NULL,
  "star" int4 NOT NULL,
  "review" int4 NOT NULL
);

-- ----------------------------
-- Records of Products
-- ----------------------------
INSERT INTO "Products" VALUES('https://csfood.vn/wp-content/uploads/2016/05/Duong-Tinh-Luyen-Bien-Hoa-Goi-1kg.jpg', 'Đường', 'Đường tinh luyện Biên Hòa', '50.000 VND', 5, 9);
INSERT INTO "Products" VALUES('https://csfood.vn/wp-content/uploads/2016/03/Nuoc-Mam-Nam-Ngu-3-Trong-1-Chai-500ml.jpg', 'Nước mắm', 'Nước mắm Nam Ngư', '50.000 VND', 4, 11);
INSERT INTO "Products" VALUES('https://cdn.tgdd.vn/Products/Images/2563/79249/nuoc-tinh-khiet-dasani-500ml-thumb-600x600.jpg', 'Nước suối', 'Nước tinh khiết Dasani', '50.000 VND', 5, 20);
INSERT INTO "Products" VALUES('https://cholimexfood.com.vn/wp-content/uploads/2019/12/nuoc-tuong-hao-vi-500-ml-FILEminimizer.jpg', 'Nước tương', 'Nước tương Hương Việt', '50.000 VND', 4, 30);

-- ----------------------------
-- Table structure for Products
-- ----------------------------
DROP TABLE IF EXISTS "accountDb";
CREATE TABLE "accountDb"(
  "Username" varchar(100) UNIQUE NOT NULL,
  "Password" varchar(100) NOT NULL,
  "Email" text NOT NULL,
  "Date" date NOT NULL,
  "Sex" text NOT NULL,
  "Role" text
);