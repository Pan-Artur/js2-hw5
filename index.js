// Task 1

const keys = [
  {
    id: 1,
    hasCurrentKeyIndex: false,
  },
  {
    id: 2,
    hasCurrentKeyIndex: false,
  },
  {
    id: 3,
    hasCurrentKeyIndex: false,
  },
  {
    id: 4,
    hasCurrentKeyIndex: false,
  },
  {
    id: 5,
    hasCurrentKeyIndex: false,
  },
  {
    id: 6,
    hasCurrentKeyIndex: false,
  },
  {
    id: 7,
    hasCurrentKeyIndex: false,
  },
  {
    id: 8,
    hasCurrentKeyIndex: false,
  },
  {
    id: 9,
    hasCurrentKeyIndex: false,
  },
];

const game = document.querySelector(".game");
const gameTitleEl = document.querySelector(".game-title");
const gameButtonEl = document.querySelector(".game-button");

const makeButtonsList = () => {
  const list = document.createElement("ul");
  gameTitleEl.after(list);

  keys.forEach((key) => {
    const item = document.createElement("li");

    const button = document.createElement("button");
    button.textContent = key.id;
    button.classList.add("btn");

    list.append(item);
    item.append(button);
  });
};

makeButtonsList();

const buttonsArr = document.querySelectorAll(".btn");

let currentKeyIndex;

const chooseCurrentKeyIndex = () => {
  currentKeyIndex = Math.floor(Math.random() * keys.length);
};

chooseCurrentKeyIndex();

const playGame = () => {
  document.addEventListener("keydown", (e) => {
    if (Number(e.key) === keys[currentKeyIndex].id) {
      currentKeyIndex = currentKeyIndex + 1;
      PNotify.success({
        text: "Це правильна клавіша!",
      });
      currentKeyIndex = Math.floor(Math.random() * keys.length);
    } else {
      PNotify.error({
        text: `Це не правильна клавіша!`,
      });
    }
  });

  buttonsArr.forEach((buttonEl) => {
    buttonEl.addEventListener("click", (e) => {
      if (Number(buttonEl.textContent) === keys[currentKeyIndex].id) {
        currentKeyIndex = currentKeyIndex + 1;
        PNotify.success({
          text: "Це правильна клавіша!",
        });
        currentKeyIndex = Math.floor(Math.random() * keys.length);
      } else {
        PNotify.error({
          text: `Це не правильна клавіша!`,
        });
      }
    });
  });
};

playGame();

const updateGame = () => {
  chooseCurrentKeyIndex();
  PNotify.success({
    text: "Гру оновлено!",
  });
};

gameButtonEl.addEventListener("click", updateGame);

document.addEventListener("keypress", (e) => {
  e.preventDefault();
});

// Task 2

const chartData = {
  labels: [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
  ],
  datasets: [
    {
      label: "Продажі за останній місяць",
      data: [
        150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550,
        600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200,
        1250, 1300, 1350,
      ],
      backgroundColor: "#2196f3",
      borderColor: "#2196f3",
      borderWidth: 1,
    },
  ],
};

const config = {
  type: "line",
  data: chartData,
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Дні місяця",
        },
      },
      y: {
        title: {
          display: true,
          text: "Продажі (грн)",
        },
        beginAtZero: true,
      },
    },
  },
};

const context = document.querySelector("#sales-chart").getContext("2d");
const salesChart = new Chart(context, config);
