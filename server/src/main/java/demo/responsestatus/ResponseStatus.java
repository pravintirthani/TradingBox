package demo.responsestatus;

import java.util.HashMap;
import java.util.List;

public final class ResponseStatus {
	

		private String status = "";
		private Object data = "";
		private String message="";
		HashMap<String, Object> statusMap = new HashMap<>();
		
		
		public ResponseStatus(String status, Object data){
			this.status = status;			
			this.data = data;	
		}
		
		public ResponseStatus(String status, String message){
			this.status = status;			
			this.message = message;	
		}
		public ResponseStatus(String status, Object data,String msg){
			this(status, data);
			this.message=msg;
		}
		
		public HashMap<String, Object> ResponseStatus(String successstatus, Object data) {
			this.statusMap.put("Status", successstatus);			
			this.statusMap.put("data", data);			
			return statusMap;
		}
		public HashMap<String, Object> getStatus() {			
			this.statusMap.put("Status", this.status);			
			this.statusMap.put("data", this.data);
			this.statusMap.put("Message", this.message);
			return statusMap;
		}

		 
	
}
