package demo.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import demo.model.Orders;

public interface OrderRepository extends GenericRepository<Orders> {

	@Query(value="Select o from Orders o where o.orderDate=:orderDate AND o.trader=:trader And o.price=:price And o.share=:share AND o.ticker=:ticker")
	List<Orders> findByOrderDateTraderPriceShareTicker(@Param("orderDate") Date orderDate,@Param("trader") String trader,@Param("price") Long price,@Param("share") Long share,@Param("ticker") String ticker);
	
}
