package demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import demo.model.Ticker;
import demo.repository.TickerRepository;


@Service
public class TickerService extends GenericService<Ticker> {	

	@Autowired
	private TickerRepository tickerRepository;

}
