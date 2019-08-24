package demo.controller;



import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import demo.model.Books;
import demo.service.BooksService;

@RestController
@RequestMapping("/books")
public class BooksController extends GenericController<Books> {
	
	@Autowired
	private BooksService booksService;	
	
	@RequestMapping(method=RequestMethod.GET,value="/getShareDetailByTicker")
	public HashMap<String,Object> getShareDetailByTicker(@RequestParam String ticker) {			
		return  booksService.getShareDetailByTicker(ticker);
	}
	
	@RequestMapping(method=RequestMethod.GET,value="/getDetailByTickerAndPriceAndOrderType")
	public HashMap<String,Object> getDetailByTickerAndPriceAndOrderType(@RequestParam String ticker,@RequestParam long price,@RequestParam String orderType) {			
		return  booksService.getDetailByTickerAndPriceAndOrderType(ticker,price,orderType);
	}
}
