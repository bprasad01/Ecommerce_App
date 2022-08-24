import { Link } from 'gatsby'
import React from 'react'

const BottomHeader = () => {
  return (
    <>
    <div className="header-bottom">
			<div className="container">
				<div className="row">
					<div className="col-sm-9">
						<div className="navbar-header">
							<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
								<span className="sr-only">Toggle navigation</span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
						</div>
						<div className="mainmenu pull-left">
							<ul className="nav navbar-nav collapse navbar-collapse">
								<li><Link to="/" className="active">Home</Link></li>
								<li className="dropdown" role='presentation'><Link to="/shop">Shop<i className="fa fa-angle-down"></i></Link>
                                    <ul className="sub-menu">
                                        <li><Link to="/shop">Products</Link></li>
										<li><Link to="/checkout">Checkout</Link></li> 
										<li><Link to="/cart">Cart</Link></li> 
										
                                    </ul>
                                </li> 
								<li><Link to="/blogs">Blog</Link></li>
								<li><Link to="/contact">Contact</Link></li>
							</ul>
						</div>
					</div>
					<div className="col-sm-3">
						<div className="search_box pull-right">
							<input type="text" placeholder="Search"/>
						</div>
					</div>
				</div>
			</div>
		</div>
    </>
  )
}

export default BottomHeader