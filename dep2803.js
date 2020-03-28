// Массив с имеющимися вкладами 
let banksList = [{ bankName: "Газпромбанк", investName: "Ваш успех", currency: "RUB", incomeType: 6.22, sumMin: 50000, sumMax: null, termMin: 12, termMax: 12, canDeposit: false },
{ bankName: "Кредит Европа Банк", investName: "Оптимальный на 2 года", currency: "RUB", incomeType: 6.45, sumMin: 100000, sumMax: null, termMin: 24, termMax: 24, canDeposit: false },
{ bankName: "Банк Зенит", investName: "Праздничный 500+", currency: "RUB", incomeType: 6, sumMin: 30000, sumMax: null, termMin: 17, termMax: 17, canDeposit: false },
{ bankName: "Еврофинанс Моснарбанк", investName: "Классический", currency: "RUB", incomeType: 6.95, sumMin: 30000, sumMax: null, termMin: 12, termMax: 24, canDeposit: false },
{ bankName: "Джей энд Ти Банк", investName: "Магнус-Онлайн", currency: "RUB", incomeType: 6.8, sumMin: 100000, sumMax: null, termMin: 6, termMax: 6, canDeposit: false },
{ bankName: "МТС Банк", investName: "В вашу пользу", currency: "RUB", incomeType: 6.75, sumMin: 50000, sumMax: null, termMin: 12, termMax: 12, canDeposit: true },
{ bankName: "Эс-Би-Ай Банк", investName: "Свои правила Онлайн", currency: "RUB", incomeType: 6.7, sumMin: 30000, sumMax: 30000000, termMin: 24, termMax: 24, canDeposit: false },
{ bankName: "Банк Уралсиб", investName: "Прогноз отличный", currency: "RUB", incomeType: 6.7, sumMin: 100000, sumMax: null, termMin: 37, termMax: 37, canDeposit: false },
{ bankName: "Инвестторгбанк", investName: "ИТБ-Постоянный доход", currency: "RUB", incomeType: 6.6, sumMin: 50000, sumMax: null, termMin: 37, termMax: 37, canDeposit: false },
{ bankName: "Транскапиталбанк", investName: "ТКБ.Постоянный доход", currency: "RUB", incomeType: 6.6, sumMin: 50000, sumMax: null, termMin: 37, termMax: 37, canDeposit: false },
{ bankName: "Совкомбанк", investName: "Зимний праздник с Халвой", currency: "RUB", incomeType: 5.6, sumMin: 50000, sumMax: null, termMin: 2, termMax: 2, canDeposit: true },
{ bankName: "Агророс", investName: "Медовый месяц", currency: "RUB", incomeType: 5.51, sumMin: 20000, sumMax: null, termMin: 1, termMax: 1, canDeposit: true },
{ bankName: "Росдорбанк", investName: "Онлайн-1", currency: "RUB", incomeType: 5.1, sumMin: 100000, sumMax: 150000000, termMin: 1, termMax: 1, canDeposit: true },
{ bankName: "Национальный Стандарт", investName: "Сберегательный стандарт", currency: "RUB", incomeType: 5.1, sumMin: 100000, sumMax: null, termMin: 1, termMax: 3, canDeposit: true },
{ bankName: "Россия", investName: "Морозные узоры", currency: "RUB", incomeType: 5, sumMin: 100000, sumMax: null, termMin: 1, termMax: 1, canDeposit: true },
{ bankName: "Кузнецкий Мост", investName: "Накопительный", currency: "RUB", incomeType: 4.85, sumMin: 50000, sumMax: null, termMin: 1, termMax: 3, canDeposit: true },
{ bankName: "Тексбанк", investName: "Универсальный", currency: "RUB", incomeType: 4.6, sumMin: 10000, sumMax: null, termMin: 1, termMax: 1, canDeposit: true },
{ bankName: "Морской Банк", investName: "Правильным курсом +", currency: "RUB", incomeType: 4.55, sumMin: 100000, sumMax: null, termMin: 1, termMax: 3, canDeposit: true },
{ bankName: "Норвик Банк", investName: "Лаконичный", currency: "RUB", incomeType: 4.5, sumMin: 500, sumMax: 50000000, termMin: 1, termMax: 1, canDeposit: true },
{ bankName: "Промсельхозбанк", investName: "Конструктор", currency: "RUB", incomeType: 4.5, sumMin: 10000, sumMax: null, termMin: 1, termMax: 3, canDeposit: true },
{ bankName: "Акибанк", investName: "Онлайн", currency: "RUB", incomeType: 6.5, sumMin: 1000, sumMax: null, termMin: 6, termMax: 6, canDeposit: true },
{ bankName: "Банк БКФ", investName: "Ключевой стандарт", currency: "RUB", incomeType: 6.5, sumMin: 100000, sumMax: null, termMin: 6, termMax: 13, canDeposit: true },
{ bankName: "Экспобанк", investName: "Специальный (в конце срока)", currency: "RUB", incomeType: 6.35, sumMin: 50000, sumMax: 10000000, termMin: 6, termMax: 6, canDeposit: true },
{ bankName: "Инвестторгбанк", investName: "ИТБ-Пополняемый", currency: "RUB", incomeType: 6.15, sumMin: 50000, sumMax: 30000000, termMin: 6, termMax: 6, canDeposit: true },
{ bankName: "Транскапиталбанк", investName: "ТКБ.Пополняемый", currency: "RUB", incomeType: 6.15, sumMin: 50000, sumMax: 30000000, termMin: 6, termMax: 6, canDeposit: true },
{ bankName: "Евроазиатский Инвестиционный Банк", investName: "Классика", currency: "RUB", incomeType: 6.1, sumMin: 100000, sumMax: null, termMin: 6, termMax: 12, canDeposit: true },
{ bankName: "Тимер Банк", investName: "Надежный выбор", currency: "RUB", incomeType: 6, sumMin: 10000, sumMax: null, termMin: 6, termMax: 6, canDeposit: true },
{ bankName: "Евразийский Банк", investName: "TURBO MAXIMUM", currency: "RUB", incomeType: 6, sumMin: 30000, sumMax: 299999, termMin: 6, termMax: 6, canDeposit: true },
{ bankName: "Таврический Банк", investName: "Достижимый (онлайн)", currency: "RUB", incomeType: 6, sumMin: 50000, sumMax: null, termMin: 6, termMax: 6, canDeposit: true },
{ bankName: "Экспобанк", investName: "Юбилейный 25 (в конце срока)", currency: "RUB", incomeType: 6.5, sumMin: 100000, sumMax: 20000000, termMin: 12, termMax: 12, canDeposit: true },
{ bankName: "Крокус-Банк", investName: "Ежемесячный доход", currency: "RUB", incomeType: 6.35, sumMin: 50000, sumMax: null, termMin: 12, termMax: 12, canDeposit: true },
{ bankName: "Промсельхозбанк", investName: "Ваш выбор", currency: "RUB", incomeType: 6.3, sumMin: 10000, sumMax: null, termMin: 12, termMax: 12, canDeposit: true },
{ bankName: "Нацинвестпромбанк", investName: "Прибыльный", currency: "RUB", incomeType: 6.3, sumMin: 50000, sumMax: null, termMin: 12, termMax: 12, canDeposit: true },
{ bankName: "Ишбанк", investName: "Накопительный", currency: "RUB", incomeType: 6.25, sumMin: 100000, sumMax: null, termMin: 12, termMax: 12, canDeposit: true },
{ bankName: "Примсоцбанк", investName: "Новогодний чулок (333 дня)", currency: "RUB", incomeType: 6.2, sumMin: 10000, sumMax: null, termMin: 11, termMax: 11, canDeposit: true },
{ bankName: "Еврофинанс Моснарбанк", investName: "Пополняемый", currency: "RUB", incomeType: 6.75, sumMin: 1000000, sumMax: null, termMin: 12, termMax: 24, canDeposit: true },
{ bankName: "Евроазиатский Инвестиционный Банк", investName: "VIP", currency: "RUB", incomeType: 6.35, sumMin: 1000000, sumMax: null, termMin: 9, termMax: 12, canDeposit: true },
{ bankName: "Российская Финансовая Корпорация", investName: "Универсальный", currency: "RUB", incomeType: 6, sumMin: 5000, sumMax: null, termMin: 3, termMax: 3, canDeposit: true },
{ bankName: "Московский Кредитный Банк", investName: "МЕГА Онлайн", currency: "RUB", incomeType: 5.8, sumMin: 1000, sumMax: null, termMin: 3, termMax: 5, canDeposit: true },
{ bankName: "Александровский", investName: "Черника 19/20", currency: "RUB", incomeType: 5.6, sumMin: 20000, sumMax: null, termMin: 3, termMax: 3, canDeposit: true },
{ bankName: "Финанс Бизнес Банк", investName: "Мандариновый!", currency: "RUB", incomeType: 5.6, sumMin: 50000, sumMax: null, termMin: 3, termMax: 3, canDeposit: true },
{ bankName: "ЦентроКредит", investName: "Доход Плюс", currency: "USD", incomeType: 1.15, sumMin: 5000, sumMax: null, termMin: 3, termMax: 3, canDeposit: true },
{ bankName: "Совкомбанк", investName: "Удобный (в долларах)", currency: "USD", incomeType: 1, sumMin: 500, sumMax: null, termMin: 3, termMax: 6, canDeposit: true },
{ bankName: "Веста", investName: "Веста - Копилка", currency: "USD", incomeType: 1, sumMin: 10000, sumMax: null, termMin: 3, termMax: 6, canDeposit: true },
{ bankName: "Славия", investName: "Славный Капитал", currency: "USD", incomeType: 0.85, sumMin: 5000, sumMax: null, termMin: 3, termMax: 4, canDeposit: true },
{ bankName: "Роскосмосбанк", investName: "Комфортный", currency: "USD", incomeType: 0.8, sumMin: 500, sumMax: null, termMin: 3, termMax: 6, canDeposit: true },
{ bankName: "ФорБанк", investName: "Срочный накопительный", currency: "USD", incomeType: 0.8, sumMin: 10000, sumMax: 500000, termMin: 3, termMax: 3, canDeposit: true },
{ bankName: "Московский Областной Банк", investName: "Гарантированный доллар", currency: "USD", incomeType: 0.75, sumMin: 50, sumMax: null, termMin: 4, termMax: 4, canDeposit: true },
{ bankName: "Объединенный Резервный Банк", investName: "ОРБ-Накопительный (в конце срока)", currency: "USD", incomeType: 1.6, sumMin: 1000, sumMax: null, termMin: 12, termMax: 12, canDeposit: true },
{ bankName: "Банк Агора", investName: "Срочный", currency: "USD", incomeType: 1.5, sumMin: 1000, sumMax: null, termMin: 12, termMax: 12, canDeposit: true },
{ bankName: "Тинькофф Банк", investName: "СмартВклад (с повышенной ставкой)", currency: "USD", incomeType: 1.5, sumMin: 1000, sumMax: null, termMin: 12, termMax: 12, canDeposit: true },
{ bankName: "Первый Инвестиционный Банк", investName: "Закон сохранения", currency: "USD", incomeType: 1.5, sumMin: 1000, sumMax: null, termMin: 12, termMax: 12, canDeposit: true },
{ bankName: "Новый Век", investName: "Сберегательный", currency: "USD", incomeType: 1.5, sumMin: 5000, sumMax: 20000, termMin: 12, termMax: 12, canDeposit: true }
];

// Класс Deposit, реализующий свойства и функциональность вклада, который хотел бы открыть клиент. 
class Deposit {
    constructor(initial, monthly, term, currency) {
        this.initial = initial;
        this.monthly = monthly;
        this.term = term;
        this.currency = currency;
    }
}

// Класс BankProduct, реализующий свойства и функциональность банковского предложения по вкладу
class BankProduct {
    constructor(bank) {
        this.bankName = bank.bankName;
        this.investName = bank.investName;
        this.incomeType = bank.incomeType;
    }
}

// Класс Calculator, инициализирующийся массивом продуктов BankProduct и вычисляющий наиболее выгодный вариант.
class Calculator {
    constructor(banksList) {
        this.banksList = banksList; // непонятная строчка, которую порекомендовал Орудж
    }

    getRusult(deposit) {
        let filteredOffers = this.filterProduct(deposit);
        let offersWithFinal = this.countFinalAmount(filteredOffers, deposit);
        let finalOffer = this.findMaxProfit(offersWithFinal);
        return finalOffer;
    }

    filterProduct(deposit) {
        let filteredOffers = [];
        for (let i in this.banksList) {
            if ((deposit.term >= this.banksList[i].termMin || this.banksList[i].termMin === null) && // Срок вклада больше мин. значения, или мин. не существует
                (deposit.term <= this.banksList[i].termMax || this.banksList[i].termMax === null) && // Срок вклада меньше макс. значения, или макс. не существует

                (deposit.initial >= this.banksList[i].sumMin || this.banksList[i].sumMin === null) && // Сумма вкладабольше мин. значения, или мин. не существует
                (deposit.initial <= this.banksList[i].sumMax || this.banksList[i].sumMax === null) && // Сумма вклада меньше макс. значения, или макс. не существует

                (deposit.monthly > 0 && this.banksList[i].canDeposit || deposit.monthly === 0) && // проверяем возможность пополнения вклада
                (deposit.currency === this.banksList[i].currency)) { // проверяем соответствие валюты вклада

                filteredOffers.push(this.banksList[i]);
            }
        }
        return filteredOffers;
    }

    //подсчёт финальной суммы вклада
    countFinalAmount(filteredOffers, deposit) {
        for (let i = 0; i < filteredOffers.length; i++) {
            let finalAmount = deposit.initial;
            for (let j = 0; j < (deposit.term - 1); j++) {
                finalAmount += deposit.monthly + finalAmount * 0.01 * filteredOffers[i].incomeType / 12;
            }
            finalAmount += finalAmount * 0.01 * filteredOffers[i].incomeType / 12;
            filteredOffers[i].finalAmount = Math.round(finalAmount);
        }
        return filteredOffers;
    }

    //поиск максимальных значений
    findMaxProfit(filteredOffers) {
        let maxDeposit = 0;
        console.log(filteredOffers);
        for (let i = 0; i < filteredOffers.length; i++) {
            if (filteredOffers[i].finalAmount > maxDeposit) {
                maxDeposit = filteredOffers[i].finalAmount;
            }
        }
        let offeredProduct = filteredOffers.filter(function (product) {
            return product.finalAmount === maxDeposit;
        })
        console.log(offeredProduct);
        return offeredProduct;
    }
}

// Класс Application, реализующий обработку нажатия на кнопку, получение введенных данных и отображение результатов.
class Application {
    constructor() {
        this.noOptions = document.getElementById('no-options');
        this.container = document.getElementById('bankProduct');
        this.table = document.getElementById('productTable');

        this.button = document.getElementById('button');
        const self = this;
        this.button.addEventListener('click', function () {
            self.handleButtonClick();
        });
    }

    handleButtonClick() {
        let deposit = this.getValues();
        this.noOptions.className = 'hidden';
        this.container.className = 'hidden';

        if (this.isError(deposit)) {
            return;
        };

        let calc = new Calculator(banksList);
        let productsToOffer = calc.getRusult(deposit); // Получение массива отфильтрованных предложений банка

        if (productsToOffer.length === 0) { // проверяем количество предложений
            this.noOptions.className = 'visible';
        } else {
            this.showResults(productsToOffer);
        }
    }
    // Получение введённых пользователем значений
    getValues() {
        let initial = Number(document.getElementById("inputInitial").value);
        let monthly = Number(document.getElementById("inputMonthly").value);
        let term = Number(document.getElementById("inputTerm").value);
        let currency = document.getElementById("inputCurrency").value;

        let deposit = new Deposit(initial, monthly, term, currency);
        return deposit;
    }

    isError(deposit) {
        let { initial, monthly, term, currency } = deposit;
        let error = false;

        if (initial <= 0 ||
            isNaN(initial)) {
            alert('начальная сумма введена некорректно');
            error = true;
        }
        if (monthly < 0 ||
            isNaN(monthly)) {
            alert('сумма пополнения введена некорректно');
            error = true;
        }
        if (term <= 0 ||
            !Number.isInteger(term) ||
            isNaN(term)) {
            alert('срок вклада введен некорректно');
            error = true;
        }
        if (!(currency === 'RUB' ||
            currency === 'USD')) {
            alert('Валюта введена некорректно');
            error = true;
        }
        return error;
    }

    showResults(productsToOffer) {
        // наполняем таблицу
        const tableContent = [];
        tableContent[0] = `<tr><th>Название банка</th>
                            <th>Вклад</th>
                            <th>Процент</th>
                            <th>Итоговая сумма</th>
                            </tr>`;

        for (let i = 0; i < productsToOffer.length; i++) {
            let { bankName, investName, incomeType, finalAmount } = productsToOffer[i];
            tableContent[i + 1] = `<tr><td>${bankName}</td>
                                    <td>${investName}</td>
                                    <td>${incomeType}</td>
                                    <td>${finalAmount}</td></tr>`;
        }

        // показываем таблицу с заголовком
        this.container.className = 'visible';
        this.table.innerHTML = '<table>' + tableContent.join('') + '</table>';
    }
}

let app = new Application();


