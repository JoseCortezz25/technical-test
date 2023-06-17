import { setupWorker, rest } from 'msw';

const products = [
  {
    pId: "xyz987",
    name: "Empanada",
    image: "https://placehold.co/200x200",
    description: "Deliciosa empanada rellena de carne y verduras.",
    price: 2.5
  },
  {
    pId: "jkl567",
    name: "Gaseosa",
    image: "https://placehold.co/200x200",
    description: "Refrescante bebida gaseosa con burbujas.",
    price: 1.75
  },
  {
    pId: "abc123",
    name: "Hamburguesa",
    image: "https://placehold.co/200x200",
    description: "Jugosa hamburguesa con carne, queso y vegetales.",
    price: 5.99
  },
  {
    pId: "def456",
    name: "Pizza",
    image: "https://placehold.co/200x200",
    description: "Deliciosa pizza con una variedad de ingredientes.",
    price: 8.25
  },
  {
    pId: "mno789",
    name: "Ensalada",
    image: "https://placehold.co/200x200",
    description: "Ensalada fresca y saludable con una mezcla de vegetales.",
    price: 4.5
  },
  {
    pId: "pqr234",
    name: "Sushi",
    image: "https://placehold.co/200x200",
    description: "Rollos de sushi elaborados con pescado fresco y arroz.",
    price: 12.99
  },
  {
    pId: "stu567",
    name: "Tacos",
    image: "https://placehold.co/200x200",
    description: "Sabrosos tacos mexicanos con tortillas de maíz y diversos rellenos.",
    price: 3.75
  },
  {
    pId: "vwx890",
    name: "Hot Dog",
    image: "https://placehold.co/200x200",
    description: "Clásico hot dog con salchicha, pan y una variedad de condimentos.",
    price: 2.99
  },
  {
    pId: "ghi345",
    name: "Pastel de chocolate",
    image: "https://placehold.co/200x200",
    description: "Delicioso pastel de chocolate con un suave y rico sabor.",
    price: 6.5
  },
  {
    pId: "lmn678",
    name: "Pollo a la parrilla",
    image: "https://placehold.co/200x200",
    description: "Pollo jugoso y sabroso cocinado a la parrilla.",
    price: 9.75
  },
  {
    pId: "yza901",
    name: "Pasta Alfredo",
    image: "https://placehold.co/200x200",
    description: "Pasta con una cremosa salsa Alfredo y queso parmesano.",
    price: 7.25
  },
  {
    pId: "bcd234",
    name: "Sopa de tomate",
    image: "https://placehold.co/200x200",
    description: "Caliente y reconfortante sopa de tomate con especias aromáticas.",
    price: 3.25
  },
  {
    pId: "efg567",
    name: "Arroz frito",
    image: "https://placehold.co/200x200",
    description: "Sabroso arroz frito salteado con vegetales y trozos de carne.",
    price: 5.5
  },
  {
    pId: "hij890",
    name: "Ceviche",
    image: "https://placehold.co/200x200",
    description: "Refrescante platillo de ceviche con pescado marinado en limón y especias.",
    price: 11.99
  },
  {
    pId: "opq123",
    name: "Churros",
    image: "https://placehold.co/200x200",
    description: "Deliciosos churros crujientes y azucarados, ideales para acompañar con chocolate caliente.",
    price: 2.25
  },
  {
    pId: "rst456",
    name: "Café",
    image: "https://placehold.co/200x200",
    description: "Aromático café recién hecho.",
    price: 2.0
  },
  {
    pId: "uvw789",
    name: "Burrito",
    image: "https://placehold.co/200x200",
    description: "Delicioso burrito con relleno de carne y frijoles.",
    price: 6.25
  },
  {
    pId: "xwz012",
    name: "Helado",
    image: "https://placehold.co/200x200",
    description: "Refrescante helado de vainilla con cobertura de chocolate.",
    price: 3.5
  },
  {
    pId: "efg345",
    name: "Sandwich",
    image: "https://placehold.co/200x200",
    description: "Sabroso sandwich con jamón, queso y vegetales frescos.",
    price: 4.0
  },
  {
    pId: "hij678",
    name: "Zumo de naranja",
    image: "https://placehold.co/200x200",
    description: "Jugo natural de naranja recién exprimido.",
    price: 2.75
  },
  {
    pId: "klm901",
    name: "Tarta de manzana",
    image: "https://placehold.co/200x200",
    description: "Deliciosa tarta de manzana casera con crujiente de canela.",
    price: 5.75
  },
  {
    pId: "nop234",
    name: "Donut",
    image: "https://placehold.co/200x200",
    description: "Donut esponjoso cubierto de glaseado.",
    price: 1.5
  },
  {
    pId: "qrs567",
    name: "Sopa de fideos",
    image: "https://placehold.co/200x200",
    description: "Caliente y reconfortante sopa de fideos casera.",
    price: 3.25
  },
  {
    pId: "tuv890",
    name: "Wrap de pollo",
    image: "https://placehold.co/200x200",
    description: "Wrap de pollo a la parrilla con vegetales frescos.",
    price: 5.5
  },
  {
    pId: "wxy123",
    name: "Smoothie de frutas",
    image: "https://placehold.co/200x200",
    description: "Batido refrescante hecho con una mezcla de frutas.",
    price: 4.25
  },
  {
    pId: "zab456",
    name: "Nachos",
    image: "https://placehold.co/200x200",
    description: "Crujientes nachos con queso fundido y salsa picante.",
    price: 7.0
  },
  {
    pId: "cde789",
    name: "Pancakes",
    image: "https://placehold.co/200x200",
    description: "Panqueques esponjosos servidos con jarabe de maple.",
    price: 4.5
  },
  {
    pId: "efg012",
    name: "Cupcake",
    image: "https://placehold.co/200x200",
    description: "Dulce y tentador cupcake decorado con crema y sprinkles.",
    price: 2.75
  },
  {
    pId: "hij345",
    name: "Enchiladas",
    image: "https://placehold.co/200x200",
    description: "Sabrosas enchiladas de pollo bañadas en salsa roja.",
    price: 8.5
  },
  {
    pId: "klm678",
    name: "Muffin",
    image: "https://placehold.co/200x200",
    description: "Muffin recién horneado con trozos de chocolate.",
    price: 3.0
  },
  {
    pId: "nop901",
    name: "Té helado",
    image: "https://placehold.co/200x200",
    description: "Refrescante té helado con sabor a frutas.",
    price: 2.25
  }
];

let checkout = []

const worker = setupWorker(
  rest.get('/api/products', (req, res, ctx) => {
    if (ctx.status >= 400) {
      return res(
        ctx.status(500),
        ctx.json({ message: 'Ocurrió un error al obtener los productos' })
      )
    }

    return res(
      ctx.status(200),
      ctx.json(products)
    )
  }),

  rest.post('/api/checkout', (req, res, ctx) => {
    const { user, cart } = req.body;
    const { employeeId } = user;

    const checkoutFoundIndex = checkout.findIndex((item) => item.employeeId === employeeId);

    if (checkoutFoundIndex >= 0) {
      checkout[checkoutFoundIndex] = {
        employeeId,
        products: cart,
        role: user.role,
        username: user.username
      }

      return res(
        ctx.status(201),
        ctx.json(checkout)
      )
    }

    checkout = [
      ...checkout,
      {
        employeeId,
        products: cart,
        role: user.role,
        username: user.username
      }
    ]

    return res(
      ctx.status(201),
      ctx.json(checkout)
    )
  }),

  rest.get('/api/checkout', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(checkout)
    )
  }),

  rest.delete('/api/checkout/:employeeId', (req, res, ctx) => {
    const employeeId = req.params.employeeId;
    const checkoutFoundIndex = checkout.findIndex((item) => item.employeeId === Number(employeeId))
    if (checkoutFoundIndex >= 0) {
      checkout.splice(checkoutFoundIndex, 1)
      return res(
        ctx.status(200),
        ctx.json(checkout)
      )
    }
    return res(
      ctx.status(404),
      ctx.json({ message: `No se encontró ningún elemento con el employeeId ${employeeId}` })
    )
  })
);

worker.start();
