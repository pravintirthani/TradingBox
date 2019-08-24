package demo.repository;

import java.util.HashMap;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import demo.model.Books;

public interface BooksRepository extends GenericRepository<Books> {

	@Query(value="SELECT new map(sum(b.share) as totalShare,b.price as price,b.orderType as orderType) From Books b where b.ticker=:ticker group by b.ticker,b.price,b.orderType order by b.price")
	List<HashMap<String,Object>> getShareDetailByTicker(@Param("ticker") String ticker);
	
	@Query(value="SELECT new map(b.id as id,b.orderDate as orderDate,b.trader as trader,b.price as price,b.orderType as orderType,b.share as share) From Books b where b.ticker=:ticker AND b.price=:price AND b.orderType=:orderType order by b.orderDate")
	List<HashMap<String, Object>> getDetailByTickerAndPriceAndOrderType(@Param("ticker") String ticker,@Param("price") long price,@Param("orderType") String orderType);

	@Query(value="SELECT b From Books b where b.ticker=:ticker AND b.price<:price AND b.share>=:share AND b.orderType='Sell' order by b.orderDate")
	List<Books> getDetailForBuyByShareOrderTypePrice(@Param("ticker") String ticker,@Param("share") Long share,@Param("price") Long price);

	@Query(value="SELECT b From Books b where b.ticker=:ticker AND b.price>:price AND b.share>=:share AND b.orderType='Buy' order by b.orderDate")
	List<Books> getDetailForSellByShareOrderTypePrice(@Param("ticker") String ticker,@Param("share") Long share,@Param("price") Long price);
}
