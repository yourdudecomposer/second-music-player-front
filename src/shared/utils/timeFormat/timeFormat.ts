export function timeFormat(totalSeconds:number):string {
    if (!totalSeconds) return '00:00';
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    console.log(9.9999.toFixed(0));
    // Добавляем ведущий ноль, если минуты или секунды < 10
    const formattedMinutes = (minutes < 10) ? `0${minutes}` : `${minutes}`;
    const formattedSeconds = (+seconds.toFixed(0) < 10) ? `0${seconds.toFixed(0)}` : `${seconds.toFixed(0)}`;
    return `${formattedMinutes}:${formattedSeconds}`;
}
