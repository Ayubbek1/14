let companies = [
    {
        name: "Rustam nosfrush",
        budget: 20000,
        tax: 12,
        expenses: [
            {
                title: "pockets",
                total: 3000,
            },
            {
                title: "rent",
                total: 5000,
            },
            {
                title: "transfer",
                total: 1000,
            },
        ]
    },
    {
        name: "Axror mashennik",
        budget: 100000,
        tax: 7,
        expenses: [
            {
                title: "idea",
                total: 10000,
            },
            {
                title: "rent",
                total: 14000,
            },
            {
                title: "car",
                total: 400,
            },
        ]
    },
    {
        name: "Xojimurod phones",
        budget: 70000,
        tax: 14,
        expenses: [
            {
                title: "goods",
                total: 30000,
            },
            {
                title: "rent",
                total: 2000,
            },
            {
                title: "tools",
                total: 1200,
            },
        ]
    },
    {
        name: "Ruxshod games",
        budget: 50000,
        tax: 14,
        expenses: [
            {
                title: "oborudovaniye",
                total: 13000,
            },
            {
                title: "rent",
                total: 800,
            },
            {
                title: "salary",
                total: 500,
            },
        ]
    },
]
let plus = []
let minus = []
// Посчитать месячцные расходы каждой компании и сохранить в новом ключе expensesPerMo
for(let item of companies){
    item.expensesPerMonth  = 0
    for(let exp of item.expenses){
        item.expensesPerMonth += exp.total
    }
    let calc = item.budget - item.budget / 100 * item.tax - item.expensesPerMonth 
    if(calc > 0 ){
        plus.push(item)
    }else if (calc <= 0){
        minus.push(item)
    }
}


console.log(
    plus,
    minus
);