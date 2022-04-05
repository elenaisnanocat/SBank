import Swal from 'sweetalert2'

export default function RecordClick() {
    let timerInterval
  return (
    
    Swal.fire({
      icon: 'warning',
      title: '주의사항',
      html: '꼭 <b></b>초 뒤 정지 버튼을 눌러주세요!!',
      showConfirmButton: false,
      timer: 10000,
      timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading()
          
          timerInterval = setInterval(() => {
          Swal.getHtmlContainer().querySelector('b')
            .textContent = (Swal.getTimerLeft() / 1000)
              .toFixed(0)
          }, 100)
        },
        willClose: () => {
          clearInterval(timerInterval)
        }
      })
  )
}