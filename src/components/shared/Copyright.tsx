export default function Copyright() {
    return (
        <div
          className="text-center text-xs font-light  mt-8 py-4"
          style={{
            borderTop: '1px solid rgba(14,165,233,0.1)',
            color: 'rgba(181, 209, 220, 1)',
            letterSpacing: '0.06em',
          }}
        >
          <span className="text-sky-100" >Purls © {new Date().getFullYear()} | All Rights Reserved </span> 
        </div>
    )
}