const partnerList=[
    {
        id: "C001",
        index:0,
        imagelink:"img/partner/asepe.jpg",
        desc:"ASEPE est une startup qui vise à promouvoir une image positive de l\'entrepreneuriat tout en favorisant le patriotisme économique. ",
        title:"Association des Economistes de Plein Temps"
    },
 
]

const partnerSection=document.getElementById("partnerSection")

partnerList.forEach((item,index)=>{
    const isActive = index === 0 ? "active" : ""; // Only the first item gets "active"
    
    const partnerItem = `
                   <div class="blog-item p-4 ${isActive}">
                        <div class="blog-img mb-4">
                            <img src=${item.imagelink} class="img-fluid w-100 rounded" alt="">
                            <div class="blog-title">
                                <a href="#" class="btn">${item.title}</a>
                            </div>
                        </div>
                        <a href="#" class="h4 d-inline-block mb-3">Options Trading Business?</a>
                        <p class="mb-4">${item.desc}  </p>
                         
                    </div>          
          `
    partnerSection.innerHTML+= partnerItem                
})

 