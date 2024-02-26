export function timeFormat(totalSeconds:number):string {
    if (!totalSeconds) return '00:00';
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    // Добавляем ведущий ноль, если минуты или секунды < 10
    const formattedMinutes = (minutes < 10) ? `0${minutes}` : `${minutes}`;
    const formattedSeconds = (seconds < 10) ? `0${seconds.toFixed(0)}` : `${seconds.toFixed(0)}`;
    console.log(`${formattedMinutes}:${formattedSeconds}`);
    return `${formattedMinutes}:${formattedSeconds}`;
}
