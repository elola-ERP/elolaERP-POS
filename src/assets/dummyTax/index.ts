export interface Tax {
    tax_id: string,
    tax_type: 'service' | 'fee',
    tax_name: string,
    tax_value: number,
    tax_status: boolean,
    tax_includeInPrice: boolean,
    created_at: string,
    updated_at: string,
    isDelete: boolean,
}

export const dummyTax: Tax[] = [
    {
        tax_id: 'BDG01',
        tax_type: 'service',
        tax_name: 'Entertainment',
        tax_value: 10,
        tax_status: true,
        tax_includeInPrice: true,
        created_at: '2024-01-08',
        updated_at: '2024-01-08',
        isDelete: false,
    },
    {
        tax_id: 'BDG02',
        tax_type: 'service',
        tax_name: 'Birthday',
        tax_value: 15,
        tax_status: true,
        tax_includeInPrice: true,
        created_at: '2024-01-08',
        updated_at: '2024-01-08',
        isDelete: false,
    },
    {
        tax_id: 'BDG03',
        tax_type: 'fee',
        tax_name: 'Dating',
        tax_value: 20,
        tax_status: true,
        tax_includeInPrice: true,
        created_at: '2024-01-08',
        updated_at: '2024-01-08',
        isDelete: false,
    },
    {
        tax_id: 'BDG04',
        tax_type: 'service',
        tax_name: 'Motorised vehicle',
        tax_value: 8,
        tax_status: false,
        tax_includeInPrice: true,
        created_at: '2024-01-08',
        updated_at: '2024-01-08',
        isDelete: false,
    },
    {
        tax_id: 'BDG05',
        tax_type: 'service',
        tax_name: 'Dinner',
        tax_value: 10,
        tax_status: false,
        tax_includeInPrice: true,
        created_at: '2024-01-08',
        updated_at: '2024-01-08',
        isDelete: false,
    },
    {
        tax_id: 'BDG06',
        tax_type: 'service',
        tax_name: 'Entertainment',
        tax_value: 10,
        tax_status: false,
        tax_includeInPrice: true,
        created_at: '2024-01-08',
        updated_at: '2024-01-08',
        isDelete: false,
    },
    {
        tax_id: 'BDG07',
        tax_type: 'service',
        tax_name: 'Entertainment',
        tax_value: 10,
        tax_status: false,
        tax_includeInPrice: true,
        created_at: '2024-01-08',
        updated_at: '2024-01-08',
        isDelete: false,
    },
    {
        tax_id: 'BDG08',
        tax_type: 'service',
        tax_name: 'Entertainment',
        tax_value: 10,
        tax_status: false,
        tax_includeInPrice: true,
        created_at: '2024-01-08',
        updated_at: '2024-01-08',
        isDelete: false,
    },
    {
        tax_id: 'BDG09',
        tax_type: 'service',
        tax_name: 'Entertainment',
        tax_value: 10,
        tax_status: false,
        tax_includeInPrice: true,
        created_at: '2024-01-08',
        updated_at: '2024-01-08',
        isDelete: false,
    },
    {
        tax_id: 'BDG010',
        tax_type: 'service',
        tax_name: 'Entertainment',
        tax_value: 10,
        tax_status: false,
        tax_includeInPrice: true,
        created_at: '2024-01-08',
        updated_at: '2024-01-08',
        isDelete: false,
    },
    {
        tax_id: 'BDG011',
        tax_type: 'service',
        tax_name: 'Entertainment',
        tax_value: 10,
        tax_status: false,
        tax_includeInPrice: true,
        created_at: '2024-01-08',
        updated_at: '2024-01-08',
        isDelete: false,
    },
    {
        tax_id: 'BDG012',
        tax_type: 'service',
        tax_name: 'Entertainment',
        tax_value: 10,
        tax_status: false,
        tax_includeInPrice: true,
        created_at: '2024-01-08',
        updated_at: '2024-01-08',
        isDelete: false,
    },
]