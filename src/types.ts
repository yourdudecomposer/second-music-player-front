export interface ITrack{
    id: number
    title: {
        en:string
        ru:string
    },
    description: {
        en:string
        ru:string
    },
    audio: string,
    cover: string,
    isActive: boolean
}
export interface IArticle{
  ru: Record<string, string>,
  en: Record<string, string>
}

export type RepeatType = 'none'| 'one'| 'all'
