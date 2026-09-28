import React,{createContext,useContext,useEffect,useMemo,useState} from 'react';
import {initialProducts} from '../data';

const StoreContext=createContext(null);
const read=(key,fallback)=>{try{const value=JSON.parse(localStorage.getItem(key));return value??fallback}catch{return fallback}};
const save=(key,value)=>localStorage.setItem(key,JSON.stringify(value));

export function StoreProvider({children}){
 const [products,setProducts]=useState(()=>read('forma_products',initialProducts));
 const [cart,setCart]=useState(()=>read('forma_cart',[]));
 const [wishlist,setWishlist]=useState(()=>read('forma_wishlist',[]));
 const [orders,setOrders]=useState(()=>read('forma_orders',[]));
 const [enquiries,setEnquiries]=useState(()=>read('forma_enquiries',[]));
 const [notice,setNotice]=useState('');
 useEffect(()=>save('forma_products',products),[products]);useEffect(()=>save('forma_cart',cart),[cart]);useEffect(()=>save('forma_wishlist',wishlist),[wishlist]);useEffect(()=>save('forma_orders',orders),[orders]);useEffect(()=>save('forma_enquiries',enquiries),[enquiries]);
 const flash=message=>{setNotice(message);window.clearTimeout(flash.timer);flash.timer=window.setTimeout(()=>setNotice(''),2400)};
 const addToCart=product=>{setCart(current=>{const old=current.find(item=>item.id===product.id);return old?current.map(item=>item.id===product.id?{...item,qty:item.qty+1}:item):[...current,{...product,qty:1}]});flash('Added to your bag')};
 const toggleWishlist=product=>setWishlist(current=>current.includes(product.id)?current.filter(id=>id!==product.id):[...current,product.id]);
 const cartCount=cart.reduce((sum,item)=>sum+item.qty,0);
 const cartTotal=cart.reduce((sum,item)=>sum+item.price*item.qty,0);
 const value=useMemo(()=>({products,setProducts,cart,setCart,wishlist,setWishlist,orders,setOrders,enquiries,setEnquiries,notice,flash,addToCart,toggleWishlist,cartCount,cartTotal}),[products,cart,wishlist,orders,enquiries,notice,cartCount,cartTotal]);
 return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}
export const useStore=()=>useContext(StoreContext);
