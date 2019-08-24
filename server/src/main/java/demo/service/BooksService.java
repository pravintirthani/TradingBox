package demo.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import demo.Constants;
import demo.model.Books;
import demo.repository.BooksRepository;
import demo.responsestatus.ResponseStatus;


@Service
public class BooksService extends GenericService<Books> {	

	@Autowired
	private BooksRepository booksRepository;
	
	public HashMap<String, Object> getShareDetailByTicker(String ticker) {
		List<HashMap<String,Object>> booksData=booksRepository.getShareDetailByTicker(ticker);		
		if(booksData.size()>0) {			
			return new ResponseStatus(Constants.successStatus, prepareDataForChart(booksData)).getStatus();
		}else{
			return new ResponseStatus(Constants.errorStatus, "Error in fetching data.").getStatus();
		}
	}
	
	private HashMap<String,Object> prepareDataForChart(List<HashMap<String, Object>> booksData){
		HashMap<String,Object> finalData=new HashMap<String,Object>();
		List<HashMap<String,String>>priceData=new ArrayList<>();
		List<HashMap<String,String>>buyData=new ArrayList<>();
		List<HashMap<String,String>>sellData=new ArrayList<>();
		for(HashMap<String,Object> obj:booksData) {
			priceData.add(new HashMap<String,String>(){{put("label",String.valueOf(obj.get("price")));}});			
			buyData.add(new HashMap<String,String>(){{put("value",(String.valueOf(obj.get("orderType")).equals("Buy")?String.valueOf(obj.get("totalShare")):""));}});
			sellData.add(new HashMap<String,String>(){{put("value",(String.valueOf(obj.get("orderType")).equals("Sell")?String.valueOf(obj.get("totalShare")):""));}});			
		}
		//Arrange Category Data		
			finalData.put("categories", new ArrayList<HashMap<String,Object>>(){{		
				add(new HashMap<String,Object>(){{
					put("category",priceData);
				}});
			}});
		//Arrange DataSet Data
			finalData.put("dataset",new ArrayList<HashMap<String,Object>>(){{
				add(new HashMap<String,Object>(){{
					put("dataset",new ArrayList<HashMap<String,Object>>() {{
						add(new HashMap<String,Object>(){{					
							put("seriesname","Buy");
							put("color","");
							put("data",buyData);
						}});					
					}});	
				}});
				add(new HashMap<String,Object>(){{
					put("dataset",new ArrayList<HashMap<String,Object>>() {{
						add(new HashMap<String,Object>(){{					
							put("seriesname","Sell");
							put("color","#ff0000");
							put("data",sellData);
						}});
					}});
				}});
			}});			
		return finalData;
	}

	public HashMap<String, Object> getDetailByTickerAndPriceAndOrderType(String ticker, long price,String orderType) {
		List<HashMap<String,Object>> booksData=booksRepository.getDetailByTickerAndPriceAndOrderType(ticker,price,orderType);		
		if(booksData.size()>0) {			
			return new ResponseStatus(Constants.successStatus, booksData).getStatus();
		}else{
			return new ResponseStatus(Constants.errorStatus, "Error in fetching data.").getStatus();
		}
	}

	public List<Books> findByShareOrderTypePrice(String ticker,Long share, Long price,String orderType) {
		if(orderType.equals("Buy")) {
			return booksRepository.getDetailForBuyByShareOrderTypePrice(ticker,share,price);
		}else {
			return booksRepository.getDetailForSellByShareOrderTypePrice(ticker,share,price);
		}
		
	}
}
