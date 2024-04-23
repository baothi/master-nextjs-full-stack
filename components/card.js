export default function Card({ children, className  }) {
    return (
      <div className={`border rounded-md border-gray-600 p-4 ${className}`}>
        Card component: {children}
      </div>
    )
  }