package demo.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import demo.model.Ticker;
import demo.service.TickerService;

@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping("/ticker")
public class TickerController extends GenericController<Ticker> {
	
	@Autowired
	private TickerService tickerService;	
}
