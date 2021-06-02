export const categories = [
  {
    title: 'Burger',
    url: '/images/burger.jpg',
    description: 'We provide best quality burger in all over the Pakistan',
    subDescription: '113g per Pattie (Quarter Pounder) | 100% Pure Ground Beef | No added ingredients | Pure beef flavour | Ideal for Summer',
    width: '40%'
},
{
    title: 'Pizza',
    url: '/images/pizza.jpg',
    description: 'We provide best quality Pizza in all over the Pakistan',
    subDescription: 'Spicy chicken | chicken fajita | smoked chicken | onions | green peppers | olives and mushrooms',
    width: '30%'
},
{
    title: 'Shawarma',
    url: '/images/shwarma.jpg',
    description: 'We provide best quality shawarma in all over the Pakistan',
    subDescription: 'Zinger Shawarma | Platter Shawarma | Spciy Shawarma | Regular Shawarma | Jumbo Shawarma',
    width: '30%',
},
]

// get array of category titles i.e., ['Burger', 'Shawarma', 'Pizza']
export const categoryTitles = categories.map(category => category.title);