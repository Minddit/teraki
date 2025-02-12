export type menuItemType = {
    title: string,
    iconName: string,
    url: string,
}

export type investmentType = {
    title: string,
    img: string,
    date: string,
    time: string,
    bonds: number,
    money: number,
    variant: string,
    variant_color: string,
}

export type transactionType = {
    icon: string,
    icon_color: string,
    icon_bg: string,
    title: string,
    date: string,
    card_icon?: string,
    card_bg?: string,
    last_card_digit?: number,
    card_type?: string,
    wallet_address?: string,
    status?: string,
    status_color?: string,
    money: number | null,
    crypto_type?: 'BTC' | 'ETH',
}

export type CaseStatus = 'New' | 'In Analysis' | 'Recovery in Progress' | 'Completed' | 'Rejected';

export type cardType = {
    title_icon: string,
    title: string,
    status: CaseStatus,
    count: number,
    trend?: {
        value: number,
        text: string
    },
    color: string
}

export type reportType = {
    title: string,
    money: number,
    variant: string,
    variant_color: "text-colorSuccess" | "text-colorDanger",
    prev_money: number,
}

export type RecentCaseType = {
    id: string,
    title: string,
    date: string,
    status: CaseStatus,
    priority: 'High' | 'Medium' | 'Low',
    assignee: string
}

export type chartType = {
    type: string,
    data: {
        labels: string[],
        datasets: {
            label: string,
            data: number[],
            borderColor: string,
            borderWidth: number,
        }[],
    },
    options: {
        responsive: boolean,
    },
}

export type paymentType = {
    id: string,
    date: string,
    amount: number,
    status: 'Pending' | 'Completed' | 'Failed',
    method: string,
    description?: string
}