
const serviceList = [
    {
        id: "C001",
        index: 0,
        imagelink: "img/kng/impression.jpg",
        nom: "Impression Numérique",
        desc: `
            <div  class="small " style="display: flex; flex-direction: column; align-items: flex-start;">  
            <a href="#"  ><i class="fas fa-angle-right me-2"></i> A0 A1 A2 A3 A4</a>  
            <a href="#"   style="padding: 5px 0;"><i class="fas fa-angle-right me-2"></i> Bache | Micro-P | Cachet Numérique</a>  
            <a href="#" style="padding: 5px 0;"><i class="fas fa-angle-right me-2"></i> Vinyle | Carreaux | Tasse | Assiette</a>  
            <a href="#" style="padding: 5px 0;"><i class="fas fa-angle-right me-2"></i> Polo | T-Shirt | Casquette | Stylo</a>  
            </div>    
        `
    },
    {
        id: "C002",
        index: 1,
        imagelink: "img/kng/infographie.jpg",
        nom: "Infographie",
        desc: `
            <div  class="small " style="display: flex; flex-direction: column; align-items: flex-start;">  
             <a href="#"   style="padding: 5px 0;"><i class="fas fa-angle-right me-2"></i> Conception graphique | Affiche | Logo</a>  
            <a href="#" style="padding: 5px 0;"><i class="fas fa-angle-right me-2"></i> Dépliants | Flyers | Calendriers | Badges</a>  
            <a href="#" style="padding: 5px 0;"><i class="fas fa-angle-right me-2"></i> Carte d'invitation | Carte de Visite</a>  
            </div>    
        `
    },
    {
        id: "C003",
        index: 2,
        imagelink: "img/kng/marketing.jpg",
        nom: "Marketing",
        desc: `
            <div  class="small " style="display: flex; flex-direction: column; align-items: flex-start;">  
             <a href="#"   style="padding: 5px 0;"><i class="fas fa-angle-right me-2"></i>Gestion de page Facebook | Instagram </a>  
            <a href="#" style="padding: 5px 0;"><i class="fas fa-angle-right me-2"></i> Location d'espace publicitaire (abri bus )  </a>  
            <a href="#" style="padding: 5px 0;"><i class="fas fa-angle-right me-2"></i> Panneau publicitaire | Placement de produit</a>  
            </div>    
        `
    },

    {
        id: "C004",
        index: 4,
        imagelink: "img/kng/bur.jpg",
        nom: "Autres",
        desc: `
            <div  class="small " style="display: flex; flex-direction: column; align-items: flex-start;">  
             <a href="#"   style="padding: 5px 0;"><i class="fas fa-angle-right me-2"></i>Photocopie | Impression | Plastification </a>  
            <a href="#" style="padding: 5px 0;"><i class="fas fa-angle-right me-2"></i> Scannage | Reliure | Saisie de texte  </a>  
            <a href="#" style="padding: 5px 0;"><i class="fas fa-angle-right me-2"></i> Photo minute | Photo Shooting</a>  
            </div>    
        `
    },
]
const serviceSection = document.getElementById("serviceSection")

serviceList.forEach((item, index) => {
   
    const serviceItem = `
        <div class="col-md-8 col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
            <div class="service-item">
                <div class="service-img">
                    <img src=${item.imagelink} class="img-fluid rounded-top w-100" alt="Image">
                </div>
                <div class="rounded-bottom p-4">
                    <a href="#" class="h4 d-inline-block mb-4"> ${item.nom}</a>
                    <p class="mb-2">  ${item.desc}  </p>
                 </div>
            </div>
        </div>
        `
    serviceSection.innerHTML += serviceItem
})

