const vordiplom = ['#fff78c', '#ffd08c', '#8ceaff', '#ff8c9d', '#c0ff8c']
const joyful = ['#d9508a', '#fe9507', '#fef778', '#6aa786', '#35c2d1']
const liberty = ['#cff8f6', '#94d4d4', '#88b4bb', '#76aeaf', '#2a6d82']
const pastel = ['#405980', '#95a57c', '#d9b8a2', '#bf8686', '#b33050']

function generateColors () : string[] {
    return vordiplom.concat(joyful,liberty,pastel)
}

export const chartColors = generateColors()

