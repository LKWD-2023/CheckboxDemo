using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using WebApplication20.Models;

namespace WebApplication20.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult CheckboxDemo(string name, bool isAmazing)
        {
            return View(new CheckboxDemoViewModel
            {
                Name = name,
                IsAmazing = isAmazing
            });
        }

        public IActionResult Signup()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Signup(Signup s)
        {
            var db = new SignupDb(@"Data Source=.\sqlexpress;Initial Catalog=SignupDemo;Integrated Security=true");
            db.Add(s);
            return Redirect("/home/signup");
        }
    }
}