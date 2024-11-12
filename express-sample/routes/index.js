var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let product =[
    {
      name:"iphone6",
      category:"mobile",
      descripion:"old model phone",
      img:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTI5SpWRHD-T6AKuEODQ7n9A0GAlfzeK-K7o_wG47MhJ4os_lRjfswfZKSZ_o7nb4x6eHXqmqo6GA3yJyVeEputzn1wSPQVc-GhsK1C-lIbgpoVvIl8f8f4O50PhnG79mmeu8aMqQ&usqp=CAc"
    },
    {
      name:"iphone7",
      category:"mobile",
      descripion:"old model phone",
      img:"data:image/webp;base64,UklGRnoDAABXRUJQVlA4IG4DAACQEgCdASorAFoAPlUWlUqjkdHKODgFRKAGf37ZmAXUl+KxAGfAdZz6FfSs13T9l/Frrv/SkmMjz+75yvecMOcRmlZx1+hbny+jPYK/VD/i9d70S/2qEI5WwKk5diTeo/T796reSMDVCbPhaeEeJ0q483/P5hJctTEYMWiGHXHHRheJaxzGpR5wZjl7lXgdGnhWl163y0XPKYKupmAAAOJ/+23GtI/ZVOfeACoyz4CL2QsyO21v/THcLpmcCYnNtcinBf1m4oPUbvl/lTIn2lLdeC/vUt+DFrcK2e8V8TU90fUntpmerh4PjfUQVVohX6pvf/pivxaDv+H0kiKvJ+Z/VJkK42sTHbvv/5CeStwhq9H/AsMIvNRi4U1fYioi5i+cvLfM93+2fuAzf6M/7PfdvTbOj78zEK/474CTdjHv3TgcL//DrPxQ7l1p2IbbTQvm/xnDw9DemwVj9sMQN7pePln/X2b5NIEIjx/eeyRpq90rYDlRCO8mBuuMnr/IjY6HkQWj5QCywZINCBpf632hCrMe6B5+ConPVS0cdnAfCPyLJdkEpoNnWSrJWI1MrEIPWEFutjdBd10weZpwp/tmQgceKetd2DpTETOa2tu1y9RT8i0p66hwLjWet4if3gknkkb9L/YH9iBnYjbfMYqGcA8JnP9D/Wd2ET1nsRGt20CLGdgTDWJy8wlAwxp3aCt7H0uHfCaDTVASf3aOEQnemYiq7uPzwQ9uh7tP5mMCkqZcOEu2xIw1Rl7fuQXODG2Z7UNXKCUL6v5gj9dqBm7L/S3rCPssnsu15B07Q1PwZ3U/CCrBt6O7wOOfKJQ5Jz/1ffCFqbBqIgiKo18rRx4WH1NTaH9a9UzsZ+kauzsRzuUWCSw1GXxJJ+x1n0BYI/vX/9f6yhiplWCuYNbyjej6lO8hUG5KexxjotR0jzpBXzYyG6TF1m7zfV+blHh0dn4/516sB02CHYeEqMJ5voZetWTAzlDfjjr+AHNOd0bgT68t/3FZ2yEAHRKfI5UQeDWl+cypFMKN9nZ/PDTQantQNm84CLGnoCRMhd+5SKvWGLv3fVD3fedruFY39ugUwC+VAgb/eWGjyeXhc97ni1NnZh9tx0Wk0oD/VqEtz4X5j/eOtvVKxog3OeB79+YGmoOdF8KU4BPB/YHwXWqAAA=="
    },
    {
      name:"iphone8",
      category:"mobile",
      descripion:"old model phone",
      img:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTI5SpWRHD-T6AKuEODQ7n9A0GAlfzeK-K7o_wG47MhJ4os_lRjfswfZKSZ_o7nb4x6eHXqmqo6GA3yJyVeEputzn1wSPQVc-GhsK1C-lIbgpoVvIl8f8f4O50PhnG79mmeu8aMqQ&usqp=CAc"
    },
    {
      name:"iphone9",
      category:"mobile",
      descripion:"old model phone",
      img:"data:image/webp;base64,UklGRnoDAABXRUJQVlA4IG4DAACQEgCdASorAFoAPlUWlUqjkdHKODgFRKAGf37ZmAXUl+KxAGfAdZz6FfSs13T9l/Frrv/SkmMjz+75yvecMOcRmlZx1+hbny+jPYK/VD/i9d70S/2qEI5WwKk5diTeo/T796reSMDVCbPhaeEeJ0q483/P5hJctTEYMWiGHXHHRheJaxzGpR5wZjl7lXgdGnhWl163y0XPKYKupmAAAOJ/+23GtI/ZVOfeACoyz4CL2QsyO21v/THcLpmcCYnNtcinBf1m4oPUbvl/lTIn2lLdeC/vUt+DFrcK2e8V8TU90fUntpmerh4PjfUQVVohX6pvf/pivxaDv+H0kiKvJ+Z/VJkK42sTHbvv/5CeStwhq9H/AsMIvNRi4U1fYioi5i+cvLfM93+2fuAzf6M/7PfdvTbOj78zEK/474CTdjHv3TgcL//DrPxQ7l1p2IbbTQvm/xnDw9DemwVj9sMQN7pePln/X2b5NIEIjx/eeyRpq90rYDlRCO8mBuuMnr/IjY6HkQWj5QCywZINCBpf632hCrMe6B5+ConPVS0cdnAfCPyLJdkEpoNnWSrJWI1MrEIPWEFutjdBd10weZpwp/tmQgceKetd2DpTETOa2tu1y9RT8i0p66hwLjWet4if3gknkkb9L/YH9iBnYjbfMYqGcA8JnP9D/Wd2ET1nsRGt20CLGdgTDWJy8wlAwxp3aCt7H0uHfCaDTVASf3aOEQnemYiq7uPzwQ9uh7tP5mMCkqZcOEu2xIw1Rl7fuQXODG2Z7UNXKCUL6v5gj9dqBm7L/S3rCPssnsu15B07Q1PwZ3U/CCrBt6O7wOOfKJQ5Jz/1ffCFqbBqIgiKo18rRx4WH1NTaH9a9UzsZ+kauzsRzuUWCSw1GXxJJ+x1n0BYI/vX/9f6yhiplWCuYNbyjej6lO8hUG5KexxjotR0jzpBXzYyG6TF1m7zfV+blHh0dn4/516sB02CHYeEqMJ5voZetWTAzlDfjjr+AHNOd0bgT68t/3FZ2yEAHRKfI5UQeDWl+cypFMKN9nZ/PDTQantQNm84CLGnoCRMhd+5SKvWGLv3fVD3fedruFY39ugUwC+VAgb/eWGjyeXhc97ni1NnZh9tx0Wk0oD/VqEtz4X5j/eOtvVKxog3OeB79+YGmoOdF8KU4BPB/YHwXWqAAA=="
    }
  ]
  res.render('index', {product  });
});

module.exports = router;
