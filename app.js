const data = [
    {
        info : "Металлочерепица Classic",
        a1:{info2: "Бренд",
        info3:"Grande Line",},
        a2:{info4:"Высота волны, мм",
        imfo5:"23.5",},
        a3:{info6:"Высота ступеньки, мм",
       info7:"20"},
       img:"./img/header/Product picture.svg"
    },
    {
        info : "Металлочерепица Classic",
        a1:{info2: "Бренд",
        info3:"Grande Line",},
        a2:{info4:"Высота волны, мм",
        imfo5:"23.5",},
        a3:{info6:"Высота ступеньки, мм",
       info7:"20"},
       img:"./img/header/Product picture2.png"
    },
    {
        info : "Металлочерепица Classic",
        a1:{info2: "Бренд",
        info3:"Grande Line",},
        a2:{info4:"Высота волны, мм",
        imfo5:"23.5",},
        a3:{info6:"Высота ступеньки, мм",
       info7:"20"},
       img:"./img/header/Product picture3.png"
    },
    {
        info : "Металлочерепица Classic",
        a1:{info2: "Бренд",
        info3:"Grande Line",},
        a2:{info4:"Высота волны, мм",
        imfo5:"23.5",},
        a3:{info6:"Высота ступеньки, мм",
       info7:"20"},
       img:"./img/header/Product picture4.png"
    },
    {
        info : "Металлочерепица Classic",
        a1:{info2: "Бренд",
        info3:"Grande Line",},
        a2:{info4:"Высота волны, мм",
        imfo5:"23.5",},
        a3:{info6:"Высота ступеньки, мм",
       info7:"20"},
       img:"./img/header/Product picture5.png"
    },
    {
        info : "Металлочерепица Classic",
        a1:{info2: "Бренд",
        info3:"Grande Line",},
        a2:{info4:"Высота волны, мм",
        imfo5:"23.5",},
        a3:{info6:"Высота ступеньки, мм",
       info7:"20"},
       img:"./img/header/Product picture6.png"
    },
    {
        info : "Металлочерепица Classic",
        a1:{info2: "Бренд",
        info3:"Grande Line",},
        a2:{info4:"Высота волны, мм",
        imfo5:"23.5",},
        a3:{info6:"Высота ступеньки, мм",
       info7:"20"},
       img:"./img/header/Product picture7.png"
    },
    {
        info : "Металлочерепица Classic",
        a1:{info2: "Бренд",
        info3:"Grande Line",},
        a2:{info4:"Высота волны, мм",
        imfo5:"23.5",},
        a3:{info6:"Высота ступеньки, мм",
       info7:"20"},
       img:"./img/header/Product picture8.png"
    },
    
    
]


const root = document.querySelector(".root");
data.map((item, ) => {
const itemHTML =`
<div class=" w-[362px] h-[880px] shadow-xl rounded-xl" >
    <div class=''>
        <img src="${item.img}">
        <h1 class = "text-[24px] ml-[30px]">${item.info}</h1>
            <div class = "w-[300px] h-[60px] text-[16px] ml-[30px] mt-[20px]">
            <div class = "flex justify-between">
            <h3>${item.a1.info2}</h3>
            <h3>${item.a1.info3}</h3>
            </div>
            <div class = "flex  justify-between">
            <h1>${item.a2.info4}</h1>    
            <h1>${item.a2.info5}</h1>    
            </div>
            <div>
            <h1>${item.a3.info6}</h1>    
            <h1>${item.a3.info7}</h1>    
            </div>           
            <div class = "mt-[20px] flex w-[112px] h-[18px]">
            <p class = "text-[14px] text-[#758499] mt-[4px]">от</p>
             <h1 class = "text-[20px] ml-[20px]">433 ₽/м²</h1>
             </div>
            <div class = "mt-[30px]">
              <h1>Цвет</h1>
                <select class = "w-[152px] h-[28px] rounded-[2px]">
                    <option>RAL 7004</option>
                    <option>green</option>
                    <option>red</option>
                    <option>black</option>
                </select>
                </div>
                <div class = "mt-[30px]">
              <h1>Толшина</h1>
                <select class = "w-[152px] h-[28px] rounded-[2px]">
                    <option>RAL 7004</option>
                    <option>green</option>
                    <option>red</option>
                    <option>black</option>
                </select>
                </div>
                <div class = "mt-[30px]">
              <h1>Поверхность</h1>
                <select class = "w-[152px] h-[28px] rounded-[2px]">
                    <option>RAL 7004</option>
                    <option>green</option>
                    <option>red</option>
                    <option>black</option>
                </select>
                </div>
                <button class="bg-[#FFC400] w-[210px] h-[50px] rounded-[60px]  mt-[30px]">Рассчитать стоимость</button>
                <button class="bg-[#FFFFFF] w-[210px] h-[50px] rounded-[60px] mt-[10px] border-[#FFC400] border-[2px]">Подробнее о товаре</button>
                </div>
                </div>
                </div>`;
root.innerHTML += itemHTML;
});

const div1 = document.querySelector(".div1")
data.map((item,) => {
    const q1 = `
    <div class=" w-[362px] h-[880px] shadow-xl rounded-xl" >
    <div class=''>
    <img src="${item.img}">
        <h1 class = "text-[24px] ml-[30px]">${item.info}</h1>
            <div class = "w-[300px] h-[60px] text-[16px] ml-[30px] mt-[20px]">
            <div class = "flex justify-between">
            <h3>${item.a1.info2}</h3>
            <h3>${item.a1.info3}</h3>
            </div>
            <div class = "flex  justify-between">
            <h1>${item.a2.info4}</h1>    
            <h1>${item.a2.info5}</h1>    
            </div>
            <div>
            <h1>${item.a3.info6}</h1>    
            <h1>${item.a3.info7}</h1>    
            </div>           
            <div class = "mt-[20px] flex w-[112px] h-[18px]">
            <p class = "text-[14px] text-[#758499] mt-[4px]">от</p>
             <h1 class = "text-[20px] ml-[20px]">433 ₽/м²</h1>
             </div>
            <div class = "mt-[30px]">
              <h1>Цвет</h1>
                <select class = "w-[152px] h-[28px] rounded-[2px]">
                    <option>RAL 7004</option>
                    <option>green</option>
                    <option>red</option>
                    <option>black</option>
                </select>
                </div>
                <div class = "mt-[30px]">
              <h1>Толшина</h1>
                <select class = "w-[152px] h-[28px] rounded-[2px]">
                    <option>RAL 7004</option>
                    <option>green</option>
                    <option>red</option>
                    <option>black</option>
                </select>
                </div>
                <div class = "mt-[30px]">
              <h1>Поверхность</h1>
                <select class = "w-[152px] h-[28px] rounded-[2px]">
                    <option>RAL 7004</option>
                    <option>green</option>
                    <option>red</option>
                    <option>black</option>
                </select>
                </div>
                <button class="bg-[#FFC400] w-[210px] h-[50px] rounded-[60px]  mt-[30px]">Рассчитать стоимость</button>
                <button class="bg-[#FFFFFF] w-[210px] h-[50px] rounded-[60px] mt-[10px] border-[#FFC400] border-[2px]">Подробнее о товаре</button>
            </div>
</div>
</div>`;
    div1.innerHTML += q1;
});
const div2 = document.querySelector(".div2")
data.map((item,) => {
    const q3 = `
    <div class=" w-[362px] h-[880px] shadow-xl rounded-xl" >
    <div class=''>
    <img src="${item.img}">
        <h1 class = "text-[24px] ml-[30px]">${item.info}</h1>
            <div class = "w-[300px] h-[60px] text-[16px] ml-[30px] mt-[20px]">
            <div class = "flex justify-between">
            <h3>${item.a1.info2}</h3>
            <h3>${item.a1.info3}</h3>
            </div>
            <div class = "flex  justify-between">
            <h1>${item.a2.info4}</h1>    
            <h1>${item.a2.info5}</h1>    
            </div>
            <div>
            <h1>${item.a3.info6}</h1>    
            <h1>${item.a3.info7}</h1>    
            </div>           
            <div class = "mt-[20px] flex w-[112px] h-[18px]">
            <p class = "text-[14px] text-[#758499] mt-[4px]">от</p>
             <h1 class = "text-[20px] ml-[20px]">433 ₽/м²</h1>
             </div>
            <div class = "mt-[30px]">
              <h1>Цвет</h1>
                <select class = "w-[152px] h-[28px] rounded-[2px]">
                    <option>RAL 7004</option>
                    <option>green</option>
                    <option>red</option>
                    <option>black</option>
                </select>
                </div>
                <div class = "mt-[30px]">
              <h1>Толшина</h1>
                <select class = "w-[152px] h-[28px] rounded-[2px]">
                    <option>RAL 7004</option>
                    <option>green</option>
                    <option>red</option>
                    <option>black</option>
                </select>
                </div>
                <div class = "mt-[30px]">
              <h1>Поверхность</h1>
                <select class = "w-[152px] h-[28px] rounded-[2px]">
                    <option>RAL 7004</option>
                    <option>green</option>
                    <option>red</option>
                    <option>black</option>
                </select>
                </div>
                <button class="bg-[#FFC400] w-[210px] h-[50px] rounded-[60px]  mt-[30px]">Рассчитать стоимость</button>
                <button class="bg-[#FFFFFF] w-[210px] h-[50px] rounded-[60px] mt-[10px] border-[#FFC400] border-[2px]">Подробнее о товаре</button>
            </div>
</div>
</div>`;
    div2.innerHTML += q3;
});
const xz = [
    {
        info:"Односкатная",
    img1:"./img/header/section3/Rectangle 4.svg"
},
{
    info:"Односкатная",
    img1:"./img/header/section3/Rectangle 4.svg"
},
{
    info:"Односкатная",
    img1:"./img/header/section3/Rectangle 4.svg"
},
{
    info:"Односкатная",
    img1:"./img/header/section3/Rectangle 4.svg"
},
]
// {
//     info:"Односкатная",
// img5:"./img/header/section3/Rectangle 4.svg"
// },
// {
//     info:"Односкатная",
// img6:"./img/header/section3/Rectangle 4.svg"
// }



const divv1 = document.querySelector(".divv1")
xz.map((item,)=>{
     const a1 = `
    <div class = "w-[161px] h-[161px] "> <img src = "${item.img1}"> 
   <h1 class = "ml-[21px] mt-[15px]">${item.info}</h1></div> 

`
divv1.innerHTML += a1
})

const xz1 = [
    {
        info:"Односкатная",
    img1:"./img/header/section3/Rectangle 4.svg"
},
{
    info:"Односкатная",
    img1:"./img/header/section3/Rectangle 4.svg"
},


]


const divv2 = document.querySelector(".divv2")
xz1.map((item)=>{
const a2 = `
<div>
<div class = "w-[161px] h-[161px] "> <img src = "${item.img1}"> 
   <h1 class = "ml-[21px] mt-[15px]">${item.info}</h1></div>
</div>
`
divv2.innerHTML += a2
})