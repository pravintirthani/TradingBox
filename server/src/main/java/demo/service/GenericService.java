package demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import demo.repository.GenericRepository;

public class GenericService<T>{	
	
	@Autowired
	public GenericRepository<T> genericRepository;
	
	public List<T> findAll() {
		System.out.println(genericRepository);
		List<T> listData=(List<T>) genericRepository.findAll();
		return listData;
	}
	public T save(T obj){
		return genericRepository.save(obj);		
	}

	public void delete(T obj){
		genericRepository.delete(obj);		
	}


}
