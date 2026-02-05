        // function updateNav() {
        //     const authButtons = document.getElementById('nav-auth-buttons');
        //     if (state.currentUser) {
        //         authButtons.innerHTML = `
        //             <span style="font-size: 0.875rem; color: var(--gray-500); margin-right: 1rem;">Hello, <b>${state.currentUser.name}</b></span>
        //             <button class="btn btn-outline" onclick="handleLogout()" style="border-radius: 0.5rem; padding: 0.5rem 1rem;">Logout</button>
        //         `;
        //     } else {
        //         authButtons.innerHTML = `
        //             <button class="btn" onclick="navigateTo('login')">Login</button>
        //             <button class="btn btn-primary" onclick="navigateTo('register')">Register</button>
        //         `;
        //     }
        // }

        // function handleLogin(e) {
        //     e.preventDefault();
        //     const role = document.getElementById('login-role').value;
        //     state.currentUser = {
        //         name: role === 'donor' ? 'Alex Doe' : role === 'hospital' ? 'Memorial Hospital' : 'Admin User',
        //         role: role
        //     };
        //     showToast(`Signing in as ${role}...`);
        //     setTimeout(() => {
        //         if (role === 'donor') navigateTo('donor-dashboard');
        //         else if (role === 'hospital') navigateTo('hospital-dashboard');
        //         else if (role === 'admin') navigateTo('admin-dashboard');
        //         else if (role === 'super-admin') navigateTo('super-admin-dashboard');
        //     }, 800);
        // }

        // function handleRegister(e) {
        //     e.preventDefault();
        //     showToast("Account created! Please login.");
        //     setTimeout(() => navigateTo('login'), 1200);
        // }

        // function handleLogout() {
        //     state.currentUser = null;
        //     navigateTo('home');
        //     showToast("Logged out successfully.");
        // }

        // function showToast(msg) {
        //     const toast = document.getElementById('toast');
        //     document.getElementById('toast-message').innerText = msg;
        //     toast.classList.add('show');
        //     setTimeout(() => toast.classList.remove('show'), 3000);
        // }

        // function showCertificate() {
        //     const overlay = document.createElement('div');
        //     overlay.id = "cert-overlay-container";
        //     overlay.innerHTML = certificateTemplate;
        //     document.body.appendChild(overlay);
        //     document.getElementById('cert-user-name').innerText = state.currentUser ? state.currentUser.name : 'Donor Name';
        //     lucide.createIcons();
        // }

        // function hideCertificate() {
        //     const el = document.getElementById('cert-overlay-container');
        //     if (el) el.remove();
        // }

        // function showModal() {
        //     showToast("Opening Request Form...");
        // }

        // window.onload = () => navigateTo('home');