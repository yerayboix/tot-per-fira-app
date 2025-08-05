import SignUpForm from "@/components/sign-up-form"

export default function RegisterPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Crear Cuenta</h1>
          <p className="text-gray-400">
            Únete a Tot per Fira y accede a todos nuestros servicios
          </p>
        </div>
        <SignUpForm onSwitchToSignIn={() => {}} />
      </div>
    </div>
  )
} 