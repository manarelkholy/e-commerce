"use strict";(self.webpackChunkfeshcart=self.webpackChunkfeshcart||[]).push([[473],{473:(g,a,o)=>{o.r(a),o.d(a,{CategoriesComponent:()=>u});var n=o(6814),m=o(1120),t=o(4769),s=o(0);const l=function(c){return["/categoryDetails",c]};function e(c,_){if(1&c&&(t.TgZ(0,"div",3)(1,"div",4),t._UZ(2,"img",5),t.TgZ(3,"h3",6),t._uU(4),t.qZA()()()),2&c){const r=_.$implicit;t.xp6(1),t.Q6J("routerLink",t.VKq(4,l,r._id)),t.xp6(1),t.Q6J("src",r.image,t.LSH)("alt",r.name),t.xp6(2),t.Oqu(r.name)}}let u=(()=>{class c{constructor(r){this._ProductService=r,this.categoryData=[]}ngOnInit(){this._ProductService.getCategory().subscribe({next:r=>{console.log(r.data),this.categoryData=r.data}})}static#t=this.\u0275fac=function(i){return new(i||c)(t.Y36(s.M))};static#e=this.\u0275cmp=t.Xpm({type:c,selectors:[["app-categories"]],standalone:!0,features:[t.jDz],decls:3,vars:1,consts:[[1,"my-5"],[1,"row","g-4","justify-content-center"],["class","col-sm-6 col-md-4 col-lg-3",4,"ngFor","ngForOf"],[1,"col-sm-6","col-md-4","col-lg-3"],["role","button",1,"border","border-success","rounded","p-2","shadow",3,"routerLink"],["height","270",1,"w-100",3,"src","alt"],[1,"text-center","text-main","h5","mt-3"]],template:function(i,p){1&i&&(t.TgZ(0,"section",0)(1,"div",1),t.YNc(2,e,5,6,"div",2),t.qZA()()),2&i&&(t.xp6(2),t.Q6J("ngForOf",p.categoryData))},dependencies:[n.ez,n.sg,m.rH]})}return c})()},0:(g,a,o)=>{o.d(a,{M:()=>t});var n=o(4769),m=o(9862);let t=(()=>{class s{constructor(e){this._HttpClient=e}getProducts(e=1){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products?page=${e}`)}getCategory(){return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/categories")}getSpecificCategory(e){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories/${e}`)}getProductDetails(e){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${e}`)}getAllBrands(){return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/brands")}getbrandsDetails(e){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/brands/${e}`)}static#t=this.\u0275fac=function(u){return new(u||s)(n.LFG(m.eN))};static#e=this.\u0275prov=n.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})()}}]);