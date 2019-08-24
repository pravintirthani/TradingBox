package demo.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "orders")
@NamedQuery(name="Orders.findAll", query="SELECT o FROM Orders o")
public class Orders  implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID", unique=true, nullable=false)
	private Long id;

	@Column(name = "ticker", nullable=false)
	private String ticker;
	
	@Column(name = "trader", nullable=false)
	private String trader;
	
	@Column(name = "price", nullable=false)
	private Long price;
	
	@Column(name = "share", nullable=false)
	private Long share;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name="order_date", nullable=false)
	private Date orderDate;
		
	@Column(name = "order_type", nullable=false)
	private String orderType;

	@Column(name = "isExecuted", nullable=false)
	private boolean isExecuted;
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTicker() {
		return ticker;
	}

	public void setTicker(String ticker) {
		this.ticker = ticker;
	}

	public String getTrader() {
		return trader;
	}

	public void setTrader(String trader) {
		this.trader = trader;
	}

	public Long getPrice() {
		return price;
	}

	public void setPrice(Long price) {
		this.price = price;
	}

	public Long getShare() {
		return share;
	}

	public void setShare(Long share) {
		this.share = share;
	}

	public Date getOrderDate() {
		return orderDate;
	}

	public void setOrderDate(Date orderDate) {
		this.orderDate = orderDate;
	}

	public String getOrderType() {
		return orderType;
	}

	public void setOrderType(String orderType) {
		this.orderType = orderType;
	}

	public boolean getIsExecuted() {
		return isExecuted;
	}

	public void setIsExecuted(boolean isExecuted) {
		this.isExecuted = isExecuted;
	}
	
	
}	
