package demo.controller;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import demo.Constants;
import demo.responsestatus.ResponseStatus;
import demo.service.GenericService;

public class GenericController<T> {
	
	@Autowired
	private GenericService<T> genericService;
	
	@RequestMapping(method=RequestMethod.GET,value="/all")
	public HashMap<String, Object> get() {			
		List<T> data=(List<T>) genericService.findAll();
		return new ResponseStatus(Constants.successStatus,data).getStatus();
	}
	
	@RequestMapping(method=RequestMethod.POST,value="/save")
	public T save(@RequestBody T entity) {		
		return genericService.save(entity);
	}
}
