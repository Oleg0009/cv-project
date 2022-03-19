(function(){
    const companyBlocks = document.querySelectorAll('.companies .block-shadow');
    const companyBlocksClose = document.querySelectorAll('.popup .close');
    const companeNames = ['viseven','mgroup','bigdrop'];

    function openCompanyPopup(e){
        e.preventDefault();
        companeNames.forEach(companyName => e.target.className.includes(companyName) && checkPopupClass(companyName));
    }
    function checkPopupClass(className){
        document.body.classList.add('open-popup');
        document.querySelector(`.popup.${className}`).classList.add('open');
    }

    companyBlocks.forEach(company=>{
        company.addEventListener('click',openCompanyPopup);
    });

    companyBlocksClose.forEach(closeBtn=>{
        closeBtn.addEventListener('click',function(){
            document.body.classList.remove('open-popup');
            companeNames.forEach(companyName=>{
                document.querySelector(`.popup.${companyName}`).classList.remove('open');
            });
        });
    }); 
})()