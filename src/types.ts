export interface ITrack{
    id: number
    title: {
        en:string
        ru:string
    },
    description: string,
    audio: string,
    cover: string,
    isActive: boolean
    createdAt:string
    updatedAt:string
}

export type RepeatType = 'none'| 'one'| 'all'
