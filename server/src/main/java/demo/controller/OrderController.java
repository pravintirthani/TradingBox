package demo.controller;



import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import demo.model.Orders;
import demo.service.OrderService;

@RestController
@RequestMapping("/orders")
public class OrderController extends GenericController<Orders> {
	
	@Autowired
	private OrderService orderService;	
	
	@RequestMapping(method=RequestMethod.POST,value="/customSave")
	public HashMap<String,Object> customSave(@RequestBody Orders orders) {			
		return  orderService.customSave(orders);
	}
		
}
