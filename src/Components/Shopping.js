import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { useQuery } from "react-query";
import { fetchAllColor, fetchAllFeaturedProduct, fetchAllMaterial, fetchAllProduct } from '../Utility/Api';

const Shopping = () => {

    const { data:ListOfmaterial } = useQuery("FetchAllMaterial",fetchAllMaterial)
    const { data:ListOfColor} = useQuery("FetchAllColor",fetchAllColor)
    const { data:ListOfProduct} = useQuery("FetchAllProduct",fetchAllProduct)
    const { data:ListOfFeaturedProduct} = useQuery("FetchAllFeaturedProduct",fetchAllFeaturedProduct)

    const saveProductInfo = (event) => {

        localStorage.getItem("CartProduct")==null?
        localStorage.setItem("CartProduct",JSON.stringify([event])):
        localStorage.setItem("CartProduct",JSON.stringify([...(JSON.parse(localStorage.getItem("CartProduct"))),event]))

        const coustomEvent = new CustomEvent("CartUpdateNumber",{ detail:                   localStorage.getItem("CartProduct")})
        window.dispatchEvent(coustomEvent)
    }



  return (
    ListOfmaterial && ListOfFeaturedProduct && ListOfColor && ListOfProduct ? <Grid container spacing={2}>
        <Grid item xs={4} sm={4} md={2} lg={2} pl={2}>

            <Typography variant='h4' gutterBottom>Filter</Typography>

            <Grid item sx={{mb:3}} >
            <Typography variant='h5' gutterBottom>Materials</Typography>
            <Typography>All</Typography>
                {ListOfmaterial.data.material.map((materialItem)=>{
                    return <Typography key={materialItem.id} sx={{ "&:hover":{
                        cursor:'pointer',
                        }}}>{materialItem.name}</Typography>
                }) }
            </Grid>
            <Grid item sx={{mb:3}}>
                <Typography variant='h5' gutterBottom>Color</Typography>
                <Typography>All</Typography>
                    {ListOfColor.data.colors.map((colorsItem)=>{
                        return <Typography key={colorsItem.id} sx={{ "&:hover":{
                            cursor:'pointer',
                            }}}>{colorsItem.name}</Typography>
                    }) }
            </Grid>

        </Grid>
        <Grid container  item xs={8} sm={8} md={10} lg={10}>
            { ListOfProduct.data.products.filter((productItem)=> ListOfFeaturedProduct.data.featured.map((item)=>(item.productId===productItem.id))).map((productItems)=>(
            <Grid item spacing={2} xs={12} sm={6} md={4} mb={2} columnSpacing={4} columnGap={5} key={productItems.id}>
                    <div className='container'>
                        <img src={productItems.image} width="90%" alt="Product Images" />
                        <div class="overlay">
                            <div class="text">
                                <Button variant='text' sx={{ "&:hover":{
                                                                        cursor:'pointer',
                                                                        color:"white"
                                                                        },
            color:"white",  
            marginTop:'6%'}} onClick={()=>saveProductInfo(productItems)}>Add to Cart</Button>
                            </div>
                        </div>                
                    </div>
                        <Typography fontWeight={700} variant='h6'>{productItems.name}</Typography>
                        <Typography>{ListOfColor.data.colors.filter((color)=> color.id===productItems.colorId).map((item)=>item.name)}  {ListOfmaterial.data.material.filter((color)=> color.id===productItems.materialId).map((item)=>item.name)}</Typography>
                        {/* <Typography> {ListOfmaterial.data.material.filter((color)=> color.id===productItems.materialId).map((item)=>item.name)}</Typography> */}
                        <Typography >INR : {productItems.price}</Typography>
                </Grid>
            ))}
            
        </Grid>
        {/* <Grid item xs={12} >
            <Pagination count={Math.ceil(ListOfProduct.data.products.length/6)} page={1} sx={{ display:"flex",justifyContent:"center"}}/>
        </Grid> */}
    </Grid> 
    : <></>
  )
}

export default Shopping