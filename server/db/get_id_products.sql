-- select * from products
-- join details
-- on products.id = details.id
-- where products.id = $1;
select * from collection
join products
on collection.id = products.id
join details
on products.id = details.id
where products.id = $1;
