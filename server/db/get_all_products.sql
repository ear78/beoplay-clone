-- select * from products;
-- join details
-- on products.id = details.id
-- join details.id = collection.id;
select * from collection
join products
on collection.id = products.id
join details
on products.id = details.id;
