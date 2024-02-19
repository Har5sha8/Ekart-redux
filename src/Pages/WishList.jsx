import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Row , Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { removeFromWishlist } from '../slices/slices/wishlistSlice';
import { addToCart } from '../slices/slices/cartSlice';



function WishList() {

  const wishlistArray = useSelector((state) => state.wishlistReducer);
const dispatch=useDispatch();
  console.log("wishlist array");
  console.log(wishlistArray);
  return (
    <>

      <Row className='m-5' style={{marginTop:"400px"}}>
        <Link to={'/home'} style={{textDecoration:"none",color:"blue"}} className='m-3'><i class="fa-solid fa-arrow-left m-3"></i>Back To Home</Link>
        {
           wishlistArray?.length>0?
           wishlistArray?.map((item)=>(
 
             <Col className='mb-5'>
           <Card style={{ width: '18rem' }}>
             <Card.Img variant="top" src={item.thumbnail} style={{height:"200px"}} />
             <Card.Body>
               <Card.Title>{item?.title}</Card.Title>
               <Card.Text>
                 <p>{item.description.slice(0,50)}...</p>
                 <p> Price:{item.price}</p>
               </Card.Text>

               <div className='d-flex align-items-center justify-content-between'>
              <Button variant="outline-danger" onClick={()=>dispatch(removeFromWishlist(item.id))} ><i class="fa-solid fa-trash"></i></Button>
              <Button variant="outline-success" onClick={()=>dispatch(addToCart(item))} ><i class="fa-solid fa-cart-plus"></i></Button>
              </div>



              
             </Card.Body>
           </Card>
         </Col>
 
           ))
           :
         <p>No Item To Display</p>
        }

      </Row>



    </>
  )
}

export default WishList
