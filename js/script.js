// 脚本文件：script.js
const categories = {
    sofa: [
        {src: 'img/sofa1.jpg', price: '¥1000'},
        {src: 'img/sofa2.jpg', price: '¥1200'},
        {src: 'img/sofa3.jpg', price: '¥1400'},
        {src: 'img/sofa4.jpg', price: '¥1600'},
        {src: 'img/sofa5.jpg', price: '¥1800'}
    ],
    chair: [
        {src: 'img/chair1.jpg', price: '¥500'},
        {src: 'img/chair2.jpg', price: '¥600'},
        {src: 'img/chair3.jpg', price: '¥700'},
        {src: 'img/chair4.jpg', price: '¥800'},
        {src: 'img/chair5.jpg', price: '¥900'}
    ],
    cabinet: [
        {src: 'cabinet1.jpg', price: '¥1500'},
        {src: 'cabinet2.jpg', price: '¥1800'},
        {src: 'cabinet3.jpg', price: '¥2000'},
        {src: 'cabinet4.jpg', price: '¥2200'},
        {src: 'cabinet5.jpg', price: '¥2500'}
    ],
    table: [
        {src: 'table1.jpg', price: '¥800'},
        {src: 'table2.jpg', price: '¥1000'},
        {src: 'table3.jpg', price: '¥1200'},
        {src: 'table4.jpg', price: '¥1400'},
        {src: 'table5.jpg', price: '¥1600'}
    ],
    stool: [
        {src: 'stool1.jpg', price: '¥200'},
        {src: 'stool2.jpg', price: '¥300'},
        {src: 'stool3.jpg', price: '¥400'},
        {src: 'stool4.jpg', price: '¥500'},
        {src: 'stool5.jpg', price: '¥600'}
    ]
};

function showCategory(category) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = ''; // 清空当前内容
    if (categories[category]) {
        categories[category].forEach(item => {
            const container = document.createElement('div');
            container.className = 'image-container';
            
            const img = document.createElement('img');
            img.src = item.src;
            
            const priceTag = document.createElement('div');
            priceTag.className = 'price-tag';
            priceTag.textContent = item.price;
            
            container.appendChild(img);
            container.appendChild(priceTag);
            gallery.appendChild(container);
        });
    } else {
        gallery.innerHTML = '<p>暂无该分类的商品。</p>';
    }
}
