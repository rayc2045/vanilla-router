const { onMounted, ref } = Vue;
import style from "../utils/style.js";
import { getData } from "../utils/function.js";

const arr1 = [
  { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
  { age: 21, first_name: "Larsen", last_name: "Shaw" },
  {
    age: 89,
    first_name: "Geneva",
    last_name: "Wilson",
    _rowVariant: "danger",
  },
  {
    age: 40,
    first_name: "Thor",
    last_name: "MacDonald",
    _cellVariants: { age: "info", first_name: "warning" },
  },
  { age: 29, first_name: "Dick", last_name: "Dunlap" },
];

const arr2 = [
  {
    planet: "Mercury",
    "diameter (km)": 4880,
    "distance to Sun (AU)": 0.39,
    "orbit (days)": 88,
  },
  {
    planet: "Venus",
    "diameter (km)": 12104,
    "distance to Sun (AU)": 0.72,
    "orbit (days)": 225,
  },
  {
    planet: "Earth",
    "diameter (km)": 12742,
    "distance to Sun (AU)": -1.001,
    "orbit (days)": 365,
  },
  {
    planet: "Mars",
    "diameter (km)": 6779,
    "distance to Sun (AU)": -1.52,
    "orbit (days)": 687,
  },
];

export default {
  setup() {
    const stockData = ref([]),
      data2 = ref(arr2);

    const testDisplayData = [
      {
        name: "Jogn",
        "phone-number": "0911222433",
        products: ["TV", "laptop"],
        "total-price": "$233",
        formula: "y=2x+3",
        coordinate: "(-3, 2)",
        completed: true,
      },
      {
        name: "Amy",
        email: "wer0012@gmail.com",
        products: ["TV", "laptop"],
        data: ["a", "b", "c"],
        "total-price": "$3345",
        formula: "y=2x+1",
        coordinate: "(-3, 2)",
        completed: "False",
      },
      {
        name: "Chen",
        "phone-number": "0911022333",
        module: "https://esm.sh/vue",
        data: ["a", "b", "c"],
        "total-price": "999",
        percentage: "-23%",
        formula: "y=2x+3",
        coordinate: "(-1, 0)",
        completed: false,
      },
      {
        name: "Chen",
        "phone-number": "0911222332",
        module: "https://esm.sh/vue",
        data: [{ a: 1 }, { a: 2 }, { b: 3 }],
        "total-price": 22567.4568,
        percentage: "58%",
        formula: "y=2x+3",
        coordinate: "(-1, 0)",
        completed: false,
      },
    ];

    onMounted(async () => {
      stockData.value = await getData(`${location.origin}/src/data/stock.json`);
    });

    /*
      <Table
        :border="false"
        :index="false" // push()
        :data="[
          {  },
          {  },
          {  }
        ]"
        :hiddens="['']"
        :fields="['']"
        caption="test data"
      />
    */

    return { style, arr1, data2, stockData, testDisplayData };
  },
  template: `
    <h1>About Page</h1>

    <Table border :data="testDisplayData" caption="test display data"/>

    <Table :data="data2" caption="data_2" />

    <Table :data="stockData" :hiddens="['description', 'symbol']" caption="Stock Data" />
   `,
};
