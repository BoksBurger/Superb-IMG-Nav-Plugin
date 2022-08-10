//#Start of Example usage//
    const superbOptions = {
        showHint: true, 
        hintText: "Sebenzisa amaqhosha otolo okanye j/k ukujonga imifanekiso.", 
        loopImages: true, 
        width: 480, 
        height: 480, 
        roundCorners: 16, 
        dropShaddow: true,
        slideShow: 0, 
        reverseShow: false,
        preloadImages: true,
        imgList: [
            'https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FtcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1531361171768-37170e369163?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNhbXBsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1600716051809-e997e11a5d52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2FtcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1612528443702-f6741f70a049?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2FtcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            'https://static01.nyt.com/images/2020/12/22/business/economy-briefing-brave/merlin_163995366_ce254619-c20f-4193-83dc-9278b2bc6015-superJumbo.jpg?quality=75&auto=webp']
    }
    const superbElement = document.getElementById("mySuperbContainer");
    superbElement.makeSuperb(superbOptions);
//#End of Example usage//