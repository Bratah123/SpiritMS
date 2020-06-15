using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;


namespace MoonLight
{
    public partial class Amoria : Form
    {
        public Amoria()
        {
            InitializeComponent();
        }

        private void notifyIcon1_MouseClick(object sender, MouseEventArgs e)
        {
  
        }

        private void notifyIcon1_MouseDoubleClick(object sender, MouseEventArgs e)
        {
            this.Show();
            this.ShowInTaskbar = true;
            this.WindowState = FormWindowState.Normal;
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            this.Hide();
            this.ShowInTaskbar = false;
        }

        private void Form1_Resize(object sender, EventArgs e)
        {
            if (WindowState == FormWindowState.Minimized)
            {
                this.Hide();
                this.ShowInTaskbar = false;
            }
        }

        private void ToolStripMenuItem1_Click(object sender, System.EventArgs e)
        {
            //Play
            Client.Run();
        }

        private void ToolStripMenuItem2_Click(object sender, System.EventArgs e)
        {
            //Exit
            this.Close();
            
        }

        private void ToolStripMenuItem3_Click(object sender, System.EventArgs e)
        {
            //Vote
            System.Diagnostics.Process.Start(Client.sWebsiteURL);

        }
    }
}
