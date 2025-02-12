import { menuItemType, investmentType, transactionType, cardType, reportType, paymentType, chartType, RecentCaseType } from "@/types/types"

//menu items
export const menuItemsData: menuItemType[] = [
    {
        title: `Your Requests`,
        url: "/requests",
        iconName: `bi-folder2-open`,
    },
    {
        title: `Messages`,
        url: "/messages",
        iconName: `bi-chat-left-text-fill`,
    },
    {
        title: `Payments`,
        url: "/payments",
        iconName: `bi-credit-card-2-front`,
    },
    {
        title: `Help Center`,
        url: "/help",
        iconName: `bi-info-circle-fill`,
    },
]

// investments data
export const investmentData: investmentType[] = [
    {
        title: "Uniliver",
        img: "uniliver.png",
        date: "7 Nov, 2022",
        time: "8:12pm",
        bonds: 1307,
        money: 11863,
        variant: "-3.23",
        variant_color: "text-colorDanger",
    },
    {
        title: "Tesla",
        img: "tesla.png",
        date: "7 Nov, 2022",
        time: "8:12pm",
        bonds: 1307,
        money: 51863,
        variant: "+13.21",
        variant_color: "text-colorSuccess",
    },
    {
        title: "Monster",
        img: "monster.png",
        date: "7 Nov, 2022",
        time: "8:12pm",
        bonds: 5307,
        money: 31863,
        variant: "+17.01",
        variant_color: "text-colorSuccess",
    },
    {
        title: "McDonalds",
        img: "mcdonalds.png",
        date: "7 Nov, 2022",
        time: "8:12pm",
        bonds: 622,
        money: 21863,
        variant: "-3.23",
        variant_color: "text-colorDanger",
    },

]

// transactions data
export const transactionstData: transactionType[] = [
    {
        icon: "bi-currency-bitcoin",
        icon_color: "text-yellow-500",
        icon_bg: "bg-yellow-100",
        title: "Completed: 1.2 BTC",
        date: "12.02.2025",
        wallet_address: "0x432***",
        status: "Recovered",
        status_color: "text-green-500",
        money: null,
        crypto_type: "BTC"
    },
    {
        icon: "bi-diamond-fill",
        icon_color: "text-blue-400",
        icon_bg: "bg-blue-100",
        title: "Completed: 5.1 ETH",
        date: "05.02.2025",
        wallet_address: "0xd02***",
        status: "Recovered",
        status_color: "text-green-500",
        money: null,
        crypto_type: "ETH"
    },
    {
        icon: "bi-diamond-fill",
        icon_color: "text-blue-400",
        icon_bg: "bg-blue-100",
        title: "Completed: 1.8 ETH",
        date: "21.12.2024",
        wallet_address: "0x99d***",
        status: "Recovered",
        status_color: "text-green-500",
        money: null,
        crypto_type: "ETH"
    },
    {
        icon: "bi-currency-bitcoin",
        icon_color: "text-yellow-500",
        icon_bg: "bg-yellow-100",
        title: "Completed: 6.6 BTC",
        date: "15.11.2024",
        wallet_address: "bc1q***",
        status: "Recovered",
        status_color: "text-green-500",
        money: null,
        crypto_type: "BTC"
    },
    {
        icon: "bi-currency-bitcoin",
        icon_color: "text-yellow-500",
        icon_bg: "bg-yellow-100",
        title: "Completed: 4.0 BTC",
        date: "28.09.2024",
        wallet_address: "bq55***",
        status: "Recovered",
        status_color: "text-green-500",
        money: null,
        crypto_type: "BTC"
    },
    {
        icon: "bi-currency-bitcoin",
        icon_color: "text-yellow-500",
        icon_bg: "bg-yellow-100",
        title: "Completed: 1.7 BTC",
        date: "14.08.2024",
        wallet_address: "brr8***",
        status: "Recovered",
        status_color: "text-green-500",
        money: null,
        crypto_type: "BTC"
    }
]

// cards data
export const cardsData: cardType[] = [
    {
        title_icon: "bi-file-earmark-plus",
        title: "New Cases",
        status: "New",
        count: 12,
        trend: {
            value: 2,
            text: "+20% this week"
        },
        color: "blue"
    },
    {
        title_icon: "bi-search",
        title: "In Analysis",
        status: "In Analysis",
        count: 8,
        trend: {
            value: 1,
            text: "+12% this week"
        },
        color: "yellow"
    },
    {
        title_icon: "bi-arrow-clockwise",
        title: "Recovery Active",
        status: "Recovery in Progress",
        count: 15,
        trend: {
            value: -1,
            text: "-5% this week"
        },
        color: "purple"
    },
]

// reports data
export const reportsData: reportType[] = [
    {
        title: "Incomes",
        money: 24033,
        variant: "+11.7",
        variant_color: "text-colorSuccess",
        prev_money: 1231,
    },
    {
        title: "Expenses",
        money: 239,
        variant: "-7.3",
        variant_color: "text-colorDanger",
        prev_money: 89211,
    },
    {
        title: "Cashback",
        money: 9034,
        variant: "+4.2",
        variant_color: "text-colorSuccess",
        prev_money: 8732,
    },
    {
        title: "Turnover",
        money: 1292,
        variant: "-15.8",
        variant_color: "text-colorDanger",
        prev_money: 22332,
    },
]

// recent cases data
export const recentCasesData: RecentCaseType[] = [
    {
        id: 'CASE-001',
        title: 'Lost BTC Transaction',
        date: '2025-02-12',
        status: 'New',
        priority: 'High',
        assignee: 'Alex M.'
    },
    {
        id: 'CASE-002',
        title: 'ETH Wallet Recovery',
        date: '2025-02-11',
        status: 'In Analysis',
        priority: 'Medium',
        assignee: 'Maria S.'
    },
    {
        id: 'CASE-003',
        title: 'Compromised Account',
        date: '2025-02-10',
        status: 'Recovery in Progress',
        priority: 'High',
        assignee: 'John D.'
    },
    {
        id: 'CASE-004',
        title: 'USDT Recovery Request',
        date: '2025-02-09',
        status: 'New',
        priority: 'Medium',
        assignee: 'Pending'
    },
]

// chart data
export const chartData: chartType = {
    type: "line",
    data: {
        labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
        ],
        datasets: [{
            label: "BTC",
            data: [
                29374, 33537, 49631, 59095, 57828, 36684, 33572, 39974, 48847,
                48116, 61004,
            ],
            borderColor: "#fa7986",
            borderWidth: 1,
        },
        {
            label: "ETH",
            data: [
                31500, 41000, 88800, 26000, 46000, 32698, 5000, 3000, 18656,
                24832, 36844,
            ],
            borderColor: "#6e717e",
            borderWidth: 1,
        },
        {
            label: "EURO",
            data: [
                3100, 4100, 8880, 36000, 56000, 62969, 500, 300, 1866,
                2832, 26004,
            ],
            borderColor: "#5b5cf1",
            borderWidth: 1,
        },],
    },
    options: {
        responsive: true,
    },
}