const container = document.querySelector(".container")
const color = "black"

function drawPanel(size) {
    container.style.cssText = `grid-template-columns: repeat(${size}, 1fr);\n
                                grid-template-rows: repeat(${size}, 1fr);`

    for (let i = 1; i <= size; i++) {
        for (let j = 1; j <= size; j++) {
            let child = document.createElement('div')
            child.addEventListener('mouseover', (e) => e.target.style.backgroundColor = "black")
            child.style.cssText = `grid-column: ${i};\n
                                    grid-row: ${j};`
            console.log('done')
            container.appendChild(child)
        }
    }
}

drawPanel(16)