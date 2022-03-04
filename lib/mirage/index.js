
import { createServer, Model } from "miragejs"
import  {dateItem, randomSelerCount,specialOffer} from './data'
import {okalaBlog} from './dataOKB'
import {FruitsVegetables} from "./dataFV"


export function makeServer() {
    let server = createServer({
        models: {
            product: Model,
            post:Model,
        },

        seeds(server) {
            specialOffer.map(item=> server.create("product", item))
            FruitsVegetables.map(item=>server.create("product", item))
            okalaBlog.map(item=> server.create("post", item))


        },

        routes() {

            

            this.namespace = "api"

            this.get("/products", (schema) => {
                return schema.products.all();
            })
            this.get('/off-products',(schema)=>{
                    return schema.products.all().filter(item=>item.isOff===true)
                }
            );
            this.get('/most-sale',(schema)=>{
                return schema.products.all().sort((a,b)=> b.selerCount-a.selerCount)
            })
            this.get('/most-off',(schema)=>{
                return schema.products.all().sort((a,b)=> b.offPercent-a.offPercent)

            })
            this.get('/category/:category',(schema,request)=>{
                return schema.products.all().filter(product=>product.categories===request.params.category)
            })
            this.get('/brands/:brandName',(schema,request)=>{
                return schema.products.all().filter(product=>product.brand===request.params.brandName)
            })
            this.get("/products/:id", (schema,request) => {
                return schema.products.find(request.params.id)
            })
            this.get("/posts", (schema)=>{
                return schema.posts.all();
            })
            this.namespace = ""
            this.passthrough()

        },

    })

    return server
}
