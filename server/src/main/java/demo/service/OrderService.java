package demo.service;

import java.util.HashMap;
import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import demo.Constants;
import demo.model.Books;
import demo.model.Orders;
import demo.repository.OrderRepository;
import demo.responsestatus.ResponseStatus;


@Service
public class OrderService extends GenericService<Orders> {	

	@Autowired
	private OrderRepository orderRepository;
	@Autowired
	private BooksService booksService;

	@Transactional
	public HashMap<String, Object> customSave(Orders orders) {		
		List<Books> book=booksService.findByShareOrderTypePrice(orders.getTicker(),orders.getShare(),orders.getPrice(),orders.getOrderType());
		if(book.size()>0) {
			Books bookData=book.get(0);
			orders.setIsExecuted(true);
			if(bookData.getShare().equals(orders.getShare())) {
				booksService.delete(bookData);
				List<Orders> previousOrders=orderRepository.findByOrderDateTraderPriceShareTicker(bookData.getOrderDate(),bookData.getTrader(),bookData.getPrice(),bookData.getShare(),bookData.getTicker());
				if(previousOrders.size()>0) {
					previousOrders.get(0).setIsExecuted(true);
					this.delete(previousOrders.get(0));
				}
			}else {
				bookData.setShare(bookData.getShare()-orders.getShare());
				booksService.save(bookData);
			}
			this.save(orders);
		}else{
			this.save(orders);
			Books bookData=new Books();
			bookData.setOrderDate(orders.getOrderDate());
			bookData.setOrderType(orders.getOrderType());
			bookData.setPrice(orders.getPrice());
			bookData.setShare(orders.getShare());
			bookData.setTicker(orders.getTicker());
			bookData.setTrader(orders.getTrader());
			booksService.save(bookData);
		}	
		return new ResponseStatus(Constants.successStatus,orders).getStatus();
	}

}
