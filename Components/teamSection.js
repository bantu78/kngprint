const teamList=[
    {
        id: "C001",
        index:0,
        imagelink:"img/team/team-3.png",
        nom:"Michelle",
        profession:"Designer"
    },
    {
        id: "C002",
        index:1,
        imagelink:"img/team/team-2.png",
        nom:"Jr. IKOUNGA",
        profession:"DG"
    },
    {
        id: "C002",
        index:1,
        imagelink:"img/team/team-1.png",
        nom:"Franck Tendel",
        profession:"Informaticien"
    }, 
 
]

const teamSection=document.getElementById("teamSection")
 
        teamList.forEach((item,index)=>{
            const teamItem = `
        <div class="col-sm-6 col-md-4 col-lg-2 col-xl-2 wow fadeInUp  " data-wow-delay="0.2s">
            <div class="team-item">
                <div class="team-img">
                    <img src=${item.imagelink} class="img-fluid" alt="" width="224" height="159" style="object-fit:cover">
                </div>
                <div class="team-title">
                    <h4 class="mb-0">${item.nom}</h4>
                    <p class="mb-0">${item.profession}</p>
                </div>
                <div class="team-icon">
                    <span class="btn btn-primary btn-sm-square rounded-circle me-3"  ><i class="fab fa-facebook-f"></i></span>
                   </div>
            </div>
        </div>
        `
        teamSection.innerHTML+= teamItem     
    })  
 
 
